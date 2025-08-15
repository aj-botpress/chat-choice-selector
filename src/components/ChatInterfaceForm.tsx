import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MessageCircle, Code, Palette } from "lucide-react";
type InterfaceType = "fab" | "embed";
type FabType = "default" | "custom";
export default function ChatInterfaceForm() {
  const [interfaceType, setInterfaceType] = useState<InterfaceType>("fab");
  const [fabType, setFabType] = useState<FabType>("default");
  const [elementId, setElementId] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      interfaceType,
      fabType,
      elementId
    });
  };
  return <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <Card className="w-full max-w-2xl shadow-[var(--shadow-medium)] border-border/50">
        <CardHeader className="space-y-1 pb-6">
          <CardTitle className="text-2xl font-semibold flex items-center gap-3 text-foreground">
            <div className="p-2 rounded-lg bg-gradient-to-br from-primary to-primary-dark">
              <MessageCircle className="h-5 w-5 text-primary-foreground" />
            </div>
            Chat interface
          </CardTitle>
          <p className="text-muted-foreground">
            Choose how you want to integrate the chat interface into your website
          </p>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Interface Type Selection */}
            <div className="space-y-4">
              <Label className="text-base font-medium text-foreground">Integration method</Label>
              <RadioGroup value={interfaceType} onValueChange={value => setInterfaceType(value as InterfaceType)} className="grid grid-cols-2 gap-4">
                <div className="relative">
                  <RadioGroupItem value="fab" id="fab" className="peer sr-only" />
                  <Label htmlFor="fab" className="flex flex-col items-center justify-center rounded-lg border-2 border-border bg-card p-6 hover:bg-accent/50 hover:border-accent-foreground/20 peer-checked:border-primary peer-checked:bg-accent cursor-pointer transition-all duration-200 space-y-3">
                    <div className="p-3 rounded-full bg-primary/10">
                      <MessageCircle className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-center">
                      <div className="font-medium text-card-foreground">Floating Action Button</div>
                      <div className="text-sm text-muted-foreground mt-1">
                        A floating chat button on your page
                      </div>
                    </div>
                  </Label>
                </div>

                <div className="relative">
                  <RadioGroupItem value="embed" id="embed" className="peer sr-only" />
                  <Label htmlFor="embed" className="flex flex-col items-center justify-center rounded-lg border-2 border-border bg-card p-6 hover:bg-accent/50 hover:border-accent-foreground/20 peer-checked:border-primary peer-checked:bg-accent cursor-pointer transition-all duration-200 space-y-3">
                    <div className="p-3 rounded-full bg-secondary/80">
                      <Code className="h-6 w-6 text-secondary-foreground" />
                    </div>
                    <div className="text-center">
                      <div className="font-medium text-card-foreground">Embed</div>
                      <div className="text-sm text-muted-foreground mt-1">
                        Embed into a specific element
                      </div>
                    </div>
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {/* Conditional Content */}
            <div className="min-h-[120px]">
              {interfaceType === "embed" && <div className="animate-fade-in space-y-3">
                  <Label htmlFor="elementId" className="text-base font-medium text-foreground">
                    Element ID
                  </Label>
                  <Input id="elementId" type="text" placeholder="e.g., chat-container" value={elementId} onChange={e => setElementId(e.target.value)} className="h-11 bg-input/50 border-border focus:border-primary focus:ring-primary/20" />
                  <p className="text-sm text-muted-foreground">
                    Enter the HTML element ID where the chat should be embedded
                  </p>
                </div>}

              {interfaceType === "fab" && <div className="animate-fade-in space-y-4">
                  <Label className="text-base font-medium text-foreground">FAB Style</Label>
                  <RadioGroup value={fabType} onValueChange={value => setFabType(value as FabType)} className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3 p-4 rounded-lg border border-border hover:bg-accent/30 transition-colors">
                      <RadioGroupItem value="default" id="default" className="text-primary" />
                      <Label htmlFor="default" className="flex-1 cursor-pointer">
                        <div className="font-medium text-card-foreground">Default FAB</div>
                        <div className="text-sm text-muted-foreground">
                          Use our pre-designed floating action button
                        </div>
                      </Label>
                    </div>

                    <div className="flex items-center space-x-3 p-4 rounded-lg border border-border hover:bg-accent/30 transition-colors">
                      <RadioGroupItem value="custom" id="custom" className="text-primary" />
                      <Label htmlFor="custom" className="flex-1 cursor-pointer">
                        <div className="font-medium text-card-foreground flex items-center gap-2">
                          Custom Element
                          <Palette className="h-4 w-4 text-muted-foreground" />
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Use your own custom button or element
                        </div>
                      </Label>
                    </div>
                  </RadioGroup>

                  {fabType === "default" && <div className="mt-4 p-4 bg-accent/20 rounded-lg border border-accent-foreground/20 animate-slide-up">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium text-accent-foreground">Default FAB Preview</h4>
                          <p className="text-sm text-muted-foreground mt-1">
                            A beautiful floating chat button will appear in the bottom-right corner
                          </p>
                        </div>
                        <div className="relative">
                          <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-full shadow-[var(--shadow-soft)] flex items-center justify-center">
                            <MessageCircle className="h-6 w-6 text-primary-foreground" />
                          </div>
                        </div>
                      </div>
                    </div>}
                </div>}
            </div>

            {/* Submit Button */}
            
          </form>
        </CardContent>
      </Card>
    </div>;
}
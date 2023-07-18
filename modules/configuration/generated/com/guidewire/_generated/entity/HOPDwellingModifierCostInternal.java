package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPDwellingModifierCost.eti;HOPDwellingModifierCost.eix;HOPDwellingModifierCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface HOPDwellingModifierCostInternal extends com.guidewire._generated.entity.HOPCostInternal, gw.api.domain.financials.CostAdapter {
  /**
   * Gets the value of the HOPDwellingMod field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.HOPDwellingMod getHOPDwellingMod();
  
  
  public gw.pl.persistence.core.Key getHOPDwellingModID();
  
  
  /**
   * Sets the value of the HOPDwellingMod field.
   */
  public void setHOPDwellingMod(entity.HOPDwellingMod value);
  
  
  public void setHOPDwellingModID(gw.pl.persistence.core.Key value);
  
  
  
}
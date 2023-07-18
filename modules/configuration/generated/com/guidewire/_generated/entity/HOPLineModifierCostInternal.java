package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPLineModifierCost.eti;HOPLineModifierCost.eix;HOPLineModifierCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface HOPLineModifierCostInternal extends com.guidewire._generated.entity.HOPCostInternal, gw.api.domain.financials.CostAdapter {
  /**
   * Gets the value of the HOPLineMod field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.HOPLineMod getHOPLineMod();
  
  
  public gw.pl.persistence.core.Key getHOPLineModID();
  
  
  /**
   * Sets the value of the HOPLineMod field.
   */
  public void setHOPLineMod(entity.HOPLineMod value);
  
  
  public void setHOPLineModID(gw.pl.persistence.core.Key value);
  
  
  
}
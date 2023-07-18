package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "WCJurisdictionCost.eti;WCJurisdictionCost.eix;WCJurisdictionCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface WCJurisdictionCostInternal extends com.guidewire._generated.entity.WCCostInternal, com.guidewire._generated.entity.CostInternal, gw.api.domain.financials.CostAdapter {
  /**
   * Gets the value of the StatCode field.
   * The statistic code for classifying premiums and surcharges that are not attributable to a specific employment class code, such as experience modification, premium for increased employer liability limits, expense constant, taxes, etc.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getStatCode();
  
  
  /**
   * Gets the value of the WCJurisdiction field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.WCJurisdiction getWCJurisdiction();
  
  
  /**
   * Gets the value of the WCJurisdictionCostType field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.WCJurisdictionCostType getWCJurisdictionCostType();
  
  
  public gw.pl.persistence.core.Key getWCJurisdictionID();
  
  
  /**
   * Sets the value of the StatCode field.
   */
  public void setStatCode(java.lang.String value);
  
  
  /**
   * Sets the value of the WCJurisdiction field.
   */
  public void setWCJurisdiction(entity.WCJurisdiction value);
  
  
  /**
   * Sets the value of the WCJurisdictionCostType field.
   */
  public void setWCJurisdictionCostType(typekey.WCJurisdictionCostType value);
  
  
  public void setWCJurisdictionID(gw.pl.persistence.core.Key value);
  
  
  
}
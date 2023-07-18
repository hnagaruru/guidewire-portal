package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "IMAccountsRecPartCost.eti;IMAccountsRecPartCost.eix;IMAccountsRecPartCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface IMAccountsRecPartCostInternal extends com.guidewire._generated.entity.IMTaxableCostInternal {
  /**
   * Gets the value of the IMAccountsRecPart field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.IMAccountsRecPart getIMAccountsRecPart();
  
  
  public gw.pl.persistence.core.Key getIMAccountsRecPartID();
  
  
  /**
   * Sets the value of the IMAccountsRecPart field.
   */
  public void setIMAccountsRecPart(entity.IMAccountsRecPart value);
  
  
  public void setIMAccountsRecPartID(gw.pl.persistence.core.Key value);
  
  
  
}
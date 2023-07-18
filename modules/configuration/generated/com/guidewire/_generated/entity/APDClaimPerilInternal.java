package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "APDClaimPeril.eti;APDClaimPeril.eix;APDClaimPeril.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface APDClaimPerilInternal extends com.guidewire._generated.entity.RetireableInternal {
  /**
   * Gets the value of the ClaimCost field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDClaimCostCategory getClaimCost();
  
  
  public gw.pl.persistence.core.Key getClaimCostID();
  
  
  /**
   * Gets the value of the Peril field.
   * One of the perils to which this cost category is restricted
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDPeril getPeril();
  
  
  public gw.pl.persistence.core.Key getPerilID();
  
  
  /**
   * Sets the value of the ClaimCost field.
   */
  public void setClaimCost(entity.APDClaimCostCategory value);
  
  
  public void setClaimCostID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Peril field.
   */
  public void setPeril(entity.APDPeril value);
  
  
  public void setPerilID(gw.pl.persistence.core.Key value);
  
  
  
}
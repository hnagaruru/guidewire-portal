package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "CPCededPremiumHistory.eti;CPCededPremiumHistory.eix;CPCededPremiumHistory.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface CPCededPremiumHistoryInternal extends com.guidewire._generated.entity.RetireableInternal, com.guidewire._generated.entity.RICededPremiumHistoryInternal, com.guidewire._generated.entity.FrozenSetMemberInternal {
  /**
   * Gets the value of the CPCededPremium field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.CPCededPremium getCPCededPremium();
  
  
  public gw.pl.persistence.core.Key getCPCededPremiumID();
  
  
  /**
   * Sets the value of the CPCededPremium field.
   */
  public void setCPCededPremium(entity.CPCededPremium value);
  
  
  public void setCPCededPremiumID(gw.pl.persistence.core.Key value);
  
  
  
}
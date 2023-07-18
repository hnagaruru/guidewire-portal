package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PACededPremiumHistory.eti;PACededPremiumHistory.eix;PACededPremiumHistory.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface PACededPremiumHistoryInternal extends com.guidewire._generated.entity.RetireableInternal, com.guidewire._generated.entity.RICededPremiumHistoryInternal, com.guidewire._generated.entity.FrozenSetMemberInternal {
  /**
   * Gets the value of the PACededPremium field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PACededPremium getPACededPremium();
  
  
  public gw.pl.persistence.core.Key getPACededPremiumID();
  
  
  /**
   * Sets the value of the PACededPremium field.
   */
  public void setPACededPremium(entity.PACededPremium value);
  
  
  public void setPACededPremiumID(gw.pl.persistence.core.Key value);
  
  
  
}
package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "WCCededPremiumHistory.eti;WCCededPremiumHistory.eix;WCCededPremiumHistory.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface WCCededPremiumHistoryInternal extends com.guidewire._generated.entity.RetireableInternal, com.guidewire._generated.entity.RICededPremiumHistoryInternal, com.guidewire._generated.entity.FrozenSetMemberInternal {
  /**
   * Gets the value of the WCCededPremium field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.WCCededPremium getWCCededPremium();
  
  
  public gw.pl.persistence.core.Key getWCCededPremiumID();
  
  
  /**
   * Sets the value of the WCCededPremium field.
   */
  public void setWCCededPremium(entity.WCCededPremium value);
  
  
  public void setWCCededPremiumID(gw.pl.persistence.core.Key value);
  
  
  
}
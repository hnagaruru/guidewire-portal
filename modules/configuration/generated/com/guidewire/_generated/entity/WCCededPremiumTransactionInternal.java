package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "WCCededPremiumTransaction.eti;WCCededPremiumTransaction.eix;WCCededPremiumTransaction.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface WCCededPremiumTransactionInternal extends com.guidewire._generated.entity.RetireableInternal, com.guidewire._generated.entity.RICededPremiumTransactionInternal, com.guidewire._generated.entity.FrozenSetMemberInternal, gw.api.reinsurance.RICededPremiumTxnAdapter {
  /**
   * Gets the value of the WCCededPremium field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.WCCededPremium getWCCededPremium();
  
  
  /**
   * Gets the value of the WCCededPremiumHistory field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.WCCededPremiumHistory getWCCededPremiumHistory();
  
  
  public gw.pl.persistence.core.Key getWCCededPremiumHistoryID();
  
  
  public gw.pl.persistence.core.Key getWCCededPremiumID();
  
  
  /**
   * Sets the value of the WCCededPremium field.
   */
  public void setWCCededPremium(entity.WCCededPremium value);
  
  
  /**
   * Sets the value of the WCCededPremiumHistory field.
   */
  public void setWCCededPremiumHistory(entity.WCCededPremiumHistory value);
  
  
  public void setWCCededPremiumHistoryID(gw.pl.persistence.core.Key value);
  
  
  public void setWCCededPremiumID(gw.pl.persistence.core.Key value);
  
  
  
}
package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PACededPremiumTransaction.eti;PACededPremiumTransaction.eix;PACededPremiumTransaction.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface PACededPremiumTransactionInternal extends com.guidewire._generated.entity.RetireableInternal, com.guidewire._generated.entity.RICededPremiumTransactionInternal, com.guidewire._generated.entity.FrozenSetMemberInternal, gw.api.reinsurance.RICededPremiumTxnAdapter {
  /**
   * Gets the value of the PACededPremium field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PACededPremium getPACededPremium();
  
  
  /**
   * Gets the value of the PACededPremiumHistory field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PACededPremiumHistory getPACededPremiumHistory();
  
  
  public gw.pl.persistence.core.Key getPACededPremiumHistoryID();
  
  
  public gw.pl.persistence.core.Key getPACededPremiumID();
  
  
  /**
   * Sets the value of the PACededPremium field.
   */
  public void setPACededPremium(entity.PACededPremium value);
  
  
  /**
   * Sets the value of the PACededPremiumHistory field.
   */
  public void setPACededPremiumHistory(entity.PACededPremiumHistory value);
  
  
  public void setPACededPremiumHistoryID(gw.pl.persistence.core.Key value);
  
  
  public void setPACededPremiumID(gw.pl.persistence.core.Key value);
  
  
  
}
package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "IMCededPremiumTransaction.eti;IMCededPremiumTransaction.eix;IMCededPremiumTransaction.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface IMCededPremiumTransactionInternal extends com.guidewire._generated.entity.RetireableInternal, com.guidewire._generated.entity.RICededPremiumTransactionInternal, com.guidewire._generated.entity.FrozenSetMemberInternal, gw.api.reinsurance.RICededPremiumTxnAdapter {
  /**
   * Gets the value of the IMCededPremium field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.IMCededPremium getIMCededPremium();
  
  
  /**
   * Gets the value of the IMCededPremiumHistory field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.IMCededPremiumHistory getIMCededPremiumHistory();
  
  
  public gw.pl.persistence.core.Key getIMCededPremiumHistoryID();
  
  
  public gw.pl.persistence.core.Key getIMCededPremiumID();
  
  
  /**
   * Sets the value of the IMCededPremium field.
   */
  public void setIMCededPremium(entity.IMCededPremium value);
  
  
  /**
   * Sets the value of the IMCededPremiumHistory field.
   */
  public void setIMCededPremiumHistory(entity.IMCededPremiumHistory value);
  
  
  public void setIMCededPremiumHistoryID(gw.pl.persistence.core.Key value);
  
  
  public void setIMCededPremiumID(gw.pl.persistence.core.Key value);
  
  
  
}
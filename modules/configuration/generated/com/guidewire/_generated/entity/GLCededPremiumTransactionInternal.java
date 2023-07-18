package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GLCededPremiumTransaction.eti;GLCededPremiumTransaction.eix;GLCededPremiumTransaction.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GLCededPremiumTransactionInternal extends com.guidewire._generated.entity.RetireableInternal, com.guidewire._generated.entity.RICededPremiumTransactionInternal, com.guidewire._generated.entity.FrozenSetMemberInternal, gw.api.reinsurance.RICededPremiumTxnAdapter {
  /**
   * Gets the value of the GLCededPremium field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GLCededPremium getGLCededPremium();
  
  
  /**
   * Gets the value of the GLCededPremiumHistory field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GLCededPremiumHistory getGLCededPremiumHistory();
  
  
  public gw.pl.persistence.core.Key getGLCededPremiumHistoryID();
  
  
  public gw.pl.persistence.core.Key getGLCededPremiumID();
  
  
  /**
   * Sets the value of the GLCededPremium field.
   */
  public void setGLCededPremium(entity.GLCededPremium value);
  
  
  /**
   * Sets the value of the GLCededPremiumHistory field.
   */
  public void setGLCededPremiumHistory(entity.GLCededPremiumHistory value);
  
  
  public void setGLCededPremiumHistoryID(gw.pl.persistence.core.Key value);
  
  
  public void setGLCededPremiumID(gw.pl.persistence.core.Key value);
  
  
  
}
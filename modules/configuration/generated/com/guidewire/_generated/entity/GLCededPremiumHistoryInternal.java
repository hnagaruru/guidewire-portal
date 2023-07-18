package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GLCededPremiumHistory.eti;GLCededPremiumHistory.eix;GLCededPremiumHistory.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GLCededPremiumHistoryInternal extends com.guidewire._generated.entity.RetireableInternal, com.guidewire._generated.entity.RICededPremiumHistoryInternal, com.guidewire._generated.entity.FrozenSetMemberInternal {
  /**
   * Gets the value of the GLCededPremium field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GLCededPremium getGLCededPremium();
  
  
  public gw.pl.persistence.core.Key getGLCededPremiumID();
  
  
  /**
   * Sets the value of the GLCededPremium field.
   */
  public void setGLCededPremium(entity.GLCededPremium value);
  
  
  public void setGLCededPremiumID(gw.pl.persistence.core.Key value);
  
  
  
}
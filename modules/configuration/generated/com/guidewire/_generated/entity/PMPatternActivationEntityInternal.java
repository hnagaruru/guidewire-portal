package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PMPatternActivationEntity.eti;PMPatternActivationEntity.eix;PMPatternActivationEntity.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface PMPatternActivationEntityInternal extends com.guidewire.pl.domain.persistence.core.impl.BeanInternal {
  /**
   * Gets the value of the ActivationTimestamp field.
   * Activation timestamp
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getActivationTimestamp();
  
  
  /**
   * Gets the value of the PatternEntityType field.
   * Product model pattern type
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPatternEntityType();
  
  
  /**
   * Gets the value of the PatternPublicID field.
   * ProductModelPattern publicID
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPatternPublicID();
  
  
  /**
   * Sets the value of the ActivationTimestamp field.
   */
  public void setActivationTimestamp(java.util.Date value);
  
  
  /**
   * Sets the value of the PatternEntityType field.
   */
  public void setPatternEntityType(java.lang.String value);
  
  
  /**
   * Sets the value of the PatternPublicID field.
   */
  public void setPatternPublicID(java.lang.String value);
  
  
  
}
package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "EntityFlowMaskDefault.eti;EntityFlowMaskDefault.eix;EntityFlowMaskDefault.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface EntityFlowMaskDefaultInternal extends com.guidewire._generated.entity.VersionableInternal {
  /**
   * Gets the value of the DefaultMask field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.EntityFlowMaskData getDefaultMask();
  
  
  public gw.pl.persistence.core.Key getDefaultMaskID();
  
  
  /**
   * Gets the value of the EntityTypeName field.
   * The entity type name for which a default is defined.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getEntityTypeName();
  
  
  /**
   * Gets the value of the LockingColumn field.
   * Meaningless column for locking
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getLockingColumn();
  
  
  /**
   * Sets the value of the DefaultMask field.
   */
  public void setDefaultMask(entity.EntityFlowMaskData value);
  
  
  public void setDefaultMaskID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the EntityTypeName field.
   */
  public void setEntityTypeName(java.lang.String value);
  
  
  /**
   * Sets the value of the LockingColumn field.
   */
  public void setLockingColumn(java.lang.Integer value);
  
  
  
}
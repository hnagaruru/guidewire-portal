package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "EntityFlowMaskData.eti;EntityFlowMaskData.eix;EntityFlowMaskData.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface EntityFlowMaskDataInternal extends com.guidewire._generated.entity.VersionableInternal {
  /**
   * Adds the given element to the DefaultArray array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToDefaultArray(entity.EntityFlowMaskDefault element);
  
  
  /**
   * Gets the value of the Default field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.EntityFlowMaskDefault getDefault();
  
  
  /**
   * Gets the value of the DefaultArray field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.EntityFlowMaskDefault[] getDefaultArray();
  
  
  public gw.pl.persistence.core.Key getDefaultID();
  
  
  /**
   * Gets the value of the EntityTypeName field.
   * The entity type name on which this mask is defined.
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
   * Gets the value of the MaskIdentifiersEncoding field.
   * A comma-separated list of paths that identify the columns to be masked out on import or export.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getMaskIdentifiersEncoding();
  
  
  /**
   * Gets the value of the Name field.
   * The name of this flow mask.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getName();
  
  
  /**
   * Removes the given element from the DefaultArray array. This is achieved by marking the element for removal.
   */
  public void removeFromDefaultArray(entity.EntityFlowMaskDefault element);
  
  
  /**
   * Removes the given element from the DefaultArray array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromDefaultArray(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the Default field.
   */
  public void setDefault(entity.EntityFlowMaskDefault value);
  
  
  /**
   * Sets the value of the DefaultArray field.
   */
  public void setDefaultArray(entity.EntityFlowMaskDefault[] value);
  
  
  public void setDefaultID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the EntityTypeName field.
   */
  public void setEntityTypeName(java.lang.String value);
  
  
  /**
   * Sets the value of the LockingColumn field.
   */
  public void setLockingColumn(java.lang.Integer value);
  
  
  /**
   * Sets the value of the MaskIdentifiersEncoding field.
   */
  public void setMaskIdentifiersEncoding(java.lang.String value);
  
  
  /**
   * Sets the value of the Name field.
   */
  public void setName(java.lang.String value);
  
  
  
}
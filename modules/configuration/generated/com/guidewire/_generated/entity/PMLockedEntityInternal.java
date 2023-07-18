package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PMLockedEntity.eti;PMLockedEntity.eix;PMLockedEntity.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface PMLockedEntityInternal extends com.guidewire._generated.entity.RetireableInternal, com.guidewire.pc.domain.productmodel.impl.PMLockedEntityInternalMethods {
  /**
   * Adds the given element to the Fields array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToFields(entity.PMLockedField element);
  
  
  /**
   * Gets the value of the EntityPublicID field.
   * The PublicID (i.e. code) of the entity
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getEntityPublicID();
  
  
  /**
   * Gets the value of the EntityType field.
   * The entity (pattern) type
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getEntityType();
  
  
  /**
   * Gets the value of the Fields field.
   * The array of locked fields
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PMLockedField[] getFields();
  
  
  /**
   * Removes the given element from the Fields array. This is achieved by marking the element for removal.
   */
  public void removeFromFields(entity.PMLockedField element);
  
  
  /**
   * Removes the given element from the Fields array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromFields(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the EntityPublicID field.
   */
  public void setEntityPublicID(java.lang.String value);
  
  
  /**
   * Sets the value of the EntityType field.
   */
  public void setEntityType(java.lang.String value);
  
  
  /**
   * Sets the value of the Fields field.
   */
  public void setFields(entity.PMLockedField[] value);
  
  
  
}
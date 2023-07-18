package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PolicyEffDatedRegistry.eti;PolicyEffDatedRegistry.eix;PolicyEffDatedRegistry.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface PolicyEffDatedRegistryInternal extends com.guidewire._generated.entity.VersionableInternal, com.guidewire._generated.entity.ExtractableInternal, com.guidewire._generated.entity.FrozenSetMemberInternal {
  /**
   * Gets the value of the Owner field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Policy getOwner();
  
  
  public gw.pl.persistence.core.Key getOwnerID();
  
  
  /**
   * Gets the value of the TableName field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getTableName();
  
  
  /**
   * Sets the value of the Owner field.
   */
  public void setOwner(entity.Policy value);
  
  
  public void setOwnerID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the TableName field.
   */
  public void setTableName(java.lang.String value);
  
  
  
}
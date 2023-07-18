package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "AffinityGroupProduct.eti;AffinityGroupProduct.eix;AffinityGroupProduct.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface AffinityGroupProductInternal extends com.guidewire._generated.entity.VersionableInternal {
  /**
   * Gets the value of the AffinityGroup field.
   * The associated affinity group.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.AffinityGroup getAffinityGroup();
  
  
  public gw.pl.persistence.core.Key getAffinityGroupID();
  
  
  /**
   * Gets the value of the ProductCode field.
   * The Product defining what kind of Policy this is
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getProductCode();
  
  
  /**
   * Sets the value of the AffinityGroup field.
   */
  public void setAffinityGroup(entity.AffinityGroup value);
  
  
  public void setAffinityGroupID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the ProductCode field.
   */
  public void setProductCode(java.lang.String value);
  
  
  
}
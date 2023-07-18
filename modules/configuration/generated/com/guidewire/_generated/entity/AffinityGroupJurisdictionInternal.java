package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "AffinityGroupJurisdiction.eti;AffinityGroupJurisdiction.eix;AffinityGroupJurisdiction.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface AffinityGroupJurisdictionInternal extends com.guidewire._generated.entity.VersionableInternal {
  /**
   * Gets the value of the AffinityGroup field.
   * The associated affinity group.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.AffinityGroup getAffinityGroup();
  
  
  public gw.pl.persistence.core.Key getAffinityGroupID();
  
  
  /**
   * Gets the value of the Jurisdiction field.
   * Jurisdiction for an affinity group
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Jurisdiction getJurisdiction();
  
  
  /**
   * Sets the value of the AffinityGroup field.
   */
  public void setAffinityGroup(entity.AffinityGroup value);
  
  
  public void setAffinityGroupID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Jurisdiction field.
   */
  public void setJurisdiction(typekey.Jurisdiction value);
  
  
  
}
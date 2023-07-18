package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "RIRiskVLContainer.eti;RIRiskVLContainer.eix;RIRiskVLContainer.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface RIRiskVLContainerInternal extends com.guidewire._generated.entity.RetireableInternal, com.guidewire._generated.entity.ExtractableInternal, com.guidewire._generated.entity.FrozenSetMemberInternal, com.guidewire.pc.domain.reinsurance.RIRiskVLContainerPublicMethods {
  /**
   * Adds the given element to the VersionLists array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToVersionLists(entity.RIRiskVersionList element);
  
  
  /**
   * Gets the value of the Policy field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Policy getPolicy();
  
  
  public gw.pl.persistence.core.Key getPolicyID();
  
  
  /**
   * Gets the value of the RiskNumber field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getRiskNumber();
  
  
  /**
   * Gets the value of the VersionLists field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.RIRiskVersionList[] getVersionLists();
  
  
  /**
   * Removes the given element from the VersionLists array. This is achieved by marking the element for removal.
   */
  public void removeFromVersionLists(entity.RIRiskVersionList element);
  
  
  /**
   * Removes the given element from the VersionLists array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromVersionLists(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the Policy field.
   */
  public void setPolicy(entity.Policy value);
  
  
  public void setPolicyID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the RiskNumber field.
   */
  public void setRiskNumber(java.lang.String value);
  
  
  /**
   * Sets the value of the VersionLists field.
   */
  public void setVersionLists(entity.RIRiskVersionList[] value);
  
  
  
}
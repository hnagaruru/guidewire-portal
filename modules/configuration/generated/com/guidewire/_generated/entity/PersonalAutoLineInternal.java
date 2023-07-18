package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PersonalAutoLine.eti;PersonalAutoLine.eix;PersonalAutoLine.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface PersonalAutoLineInternal extends com.guidewire._generated.entity.PolicyLineInternal, com.guidewire._generated.entity.CoverableInternal, com.guidewire._generated.entity.ModifiableInternal, gw.api.domain.CoverableAdapter, gw.api.domain.ModifiableAdapter, gw.api.policy.PolicyLineJavaMethods {
  /**
   * Adds the given element to the PACosts array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToPACosts(entity.PACost element);
  
  
  /**
   * Adds the given element to the PALineConditions array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToPALineConditions(entity.PersonalAutoCond element);
  
  
  /**
   * Adds the given element to the PALineCoverages array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToPALineCoverages(entity.PersonalAutoCov element);
  
  
  /**
   * Adds the given element to the PALineExclusions array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToPALineExclusions(entity.PersonalAutoExcl element);
  
  
  /**
   * Adds the given element to the PAModifiers array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToPAModifiers(entity.PAModifier element);
  
  
  /**
   * Adds the given element to the PolicyDriverMVRs array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToPolicyDriverMVRs(entity.PolicyDriverMVR element);
  
  
  /**
   * Adds the given element to the PolicyDrivers array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToPolicyDrivers(entity.PolicyDriver element);
  
  
  /**
   * Adds the given element to the Vehicles array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToVehicles(entity.PersonalVehicle element);
  
  
  /**
   * Gets the value of the PACosts field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PACost[] getPACosts();
  
  
  /**
   * Gets the value of the PALineConditions field.
   * Line-level conditions for Personal Auto.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PersonalAutoCond[] getPALineConditions();
  
  
  /**
   * Gets the value of the PALineCoverages field.
   * Line-level coverages for Personal Auto.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PersonalAutoCov[] getPALineCoverages();
  
  
  /**
   * Gets the value of the PALineExclusions field.
   * Line-level exclusions for Personal Auto.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PersonalAutoExcl[] getPALineExclusions();
  
  
  /**
   * Gets the value of the PAModifiers field.
   * Rating info for the line.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PAModifier[] getPAModifiers();
  
  
  /**
   * Gets the value of the PersonalVehicleAutoNumberSeq field.
   * Sequence to autonumber vehicles
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.AutoNumberSequence getPersonalVehicleAutoNumberSeq();
  
  
  public gw.pl.persistence.core.Key getPersonalVehicleAutoNumberSeqID();
  
  
  /**
   * Gets the value of the PolicyDriverMVRs field.
   * MVRs for all the drivers on this policy line.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyDriverMVR[] getPolicyDriverMVRs();
  
  
  /**
   * Gets the value of the PolicyDrivers field.
   * Drivers on this policy line.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyDriver[] getPolicyDrivers();
  
  
  /**
   * Gets the value of the Vehicles field.
   * Vehicles on this policy line.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PersonalVehicle[] getVehicles();
  
  
  /**
   * Removes the given element from the PACosts array. This is achieved by marking the element for removal.
   */
  public void removeFromPACosts(entity.PACost element);
  
  
  /**
   * Removes the given element from the PACosts array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromPACosts(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the PALineConditions array. This is achieved by marking the element for removal.
   */
  public void removeFromPALineConditions(entity.PersonalAutoCond element);
  
  
  /**
   * Removes the given element from the PALineConditions array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromPALineConditions(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the PALineCoverages array. This is achieved by marking the element for removal.
   */
  public void removeFromPALineCoverages(entity.PersonalAutoCov element);
  
  
  /**
   * Removes the given element from the PALineCoverages array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromPALineCoverages(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the PALineExclusions array. This is achieved by marking the element for removal.
   */
  public void removeFromPALineExclusions(entity.PersonalAutoExcl element);
  
  
  /**
   * Removes the given element from the PALineExclusions array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromPALineExclusions(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the PAModifiers array. This is achieved by marking the element for removal.
   */
  public void removeFromPAModifiers(entity.PAModifier element);
  
  
  /**
   * Removes the given element from the PAModifiers array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromPAModifiers(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the PolicyDriverMVRs array. This is achieved by marking the element for removal.
   */
  public void removeFromPolicyDriverMVRs(entity.PolicyDriverMVR element);
  
  
  /**
   * Removes the given element from the PolicyDriverMVRs array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromPolicyDriverMVRs(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the PolicyDrivers array. This is achieved by marking the element for removal.
   */
  public void removeFromPolicyDrivers(entity.PolicyDriver element);
  
  
  /**
   * Removes the given element from the PolicyDrivers array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromPolicyDrivers(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the Vehicles array. This is achieved by marking the element for removal.
   */
  public void removeFromVehicles(entity.PersonalVehicle element);
  
  
  /**
   * Removes the given element from the Vehicles array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromVehicles(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the PACosts field.
   */
  public void setPACosts(entity.PACost[] value);
  
  
  /**
   * Sets the value of the PALineConditions field.
   */
  public void setPALineConditions(entity.PersonalAutoCond[] value);
  
  
  /**
   * Sets the value of the PALineCoverages field.
   */
  public void setPALineCoverages(entity.PersonalAutoCov[] value);
  
  
  /**
   * Sets the value of the PALineExclusions field.
   */
  public void setPALineExclusions(entity.PersonalAutoExcl[] value);
  
  
  /**
   * Sets the value of the PAModifiers field.
   */
  public void setPAModifiers(entity.PAModifier[] value);
  
  
  /**
   * Sets the value of the PersonalVehicleAutoNumberSeq field.
   */
  public void setPersonalVehicleAutoNumberSeq(entity.AutoNumberSequence value);
  
  
  public void setPersonalVehicleAutoNumberSeqID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the PolicyDriverMVRs field.
   */
  public void setPolicyDriverMVRs(entity.PolicyDriverMVR[] value);
  
  
  /**
   * Sets the value of the PolicyDrivers field.
   */
  public void setPolicyDrivers(entity.PolicyDriver[] value);
  
  
  /**
   * Sets the value of the Vehicles field.
   */
  public void setVehicles(entity.PersonalVehicle[] value);
  
  
  
}
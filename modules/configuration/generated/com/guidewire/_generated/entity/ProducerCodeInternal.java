package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "ProducerCode.eti;ProducerCode.eix;ProducerCode.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface ProducerCodeInternal extends com.guidewire._generated.entity.RetireableInternal, com.guidewire._generated.entity.ValidatableInternal, com.guidewire._generated.entity.EventAwareInternal, com.guidewire.pc.domain.product.ProducerCodePublicMethods, com.guidewire.pc.domain.product.impl.ProducerCodeInternalMethods {
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String PRODUCERCODEADDED_EVENT = "ProducerCodeAdded";
  
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String PRODUCERCODECHANGED_EVENT = "ProducerCodeChanged";
  
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String PRODUCERCODEREMOVED_EVENT = "ProducerCodeRemoved";
  
  /**
   * Adds the given element to the AffinityGroupProducerCodes array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToAffinityGroupProducerCodes(entity.AffinityGroupProducerCode element);
  
  
  /**
   * Adds the given element to the CommissionPlans array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToCommissionPlans(entity.CommissionPlan element);
  
  
  /**
   * Adds the given element to the Description_L10N_ARRAY array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToDescription_L10N_ARRAY(entity.ProducerCode_Description_L10N element);
  
  
  /**
   * Adds the given element to the GroupProducerCodes array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToGroupProducerCodes(entity.GroupProducerCode element);
  
  
  /**
   * Adds the given element to the ProducerCodeRoles array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToProducerCodeRoles(entity.ProducerCodeRole element);
  
  
  /**
   * Adds the given element to the ProducercodecodeArray array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToProducercodecodeArray(entity.Producercodecode element);
  
  
  /**
   * Adds the given element to the UserProducerCodes array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToUserProducerCodes(entity.UserProducerCode element);
  
  
  /**
   * Gets the value of the Address field.
   * The contact for this producer code.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Address getAddress();
  
  
  public gw.pl.persistence.core.Key getAddressID();
  
  
  /**
   * Gets the value of the AddressPublicID field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getAddressPublicID();
  
  
  /**
   * Gets the value of the AffinityGroupProducerCodes field.
   * Available groups to a producer code.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.AffinityGroupProducerCode[] getAffinityGroupProducerCodes();
  
  
  /**
   * Gets the value of the AppointmentDate field.
   * Indicates when the carrier's relationship with the producer began.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getAppointmentDate();
  
  
  /**
   * Gets the value of the Branch field.
   * The internal (carrier) branch that handles the business for this producer code.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Group getBranch();
  
  
  public gw.pl.persistence.core.Key getBranchID();
  
  
  /**
   * Gets the value of the Code field.
   * The producer code.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCode();
  
  
  /**
   * Gets the value of the CodeDenorm field.
   * denorm field for Code
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCodeDenorm();
  
  
  /**
   * Gets the value of the CommissionPlans field.
   * Currencies allowed to be used by the producer code as billing currency.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.CommissionPlan[] getCommissionPlans();
  
  
  /**
   * Gets the value of the Description field.
   * The producer code description.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getDescription();
  
  
  /**
   * Gets the value of the DescriptionDenorm field.
   * denorm field for Description
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getDescriptionDenorm();
  
  
  /**
   * Gets the value of the Description_L10N_ARRAY field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ProducerCode_Description_L10N[] getDescription_L10N_ARRAY();
  
  
  /**
   * Array association for partition Description_L10N_ARRAYByLanguage on array Description_L10N_ARRAY
   */
  public entity.ProducerCode_Description_L10N getDescription_L10N_ARRAYByLanguage(com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo property);
  
  
  /**
   * Gets the value of the GroupProducerCodes field.
   * Available producer codes to an external producer group.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GroupProducerCode[] getGroupProducerCodes();
  
  
  /**
   * Gets the value of the Organization field.
   * The Organization this producer code belongs to.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Organization getOrganization();
  
  
  public gw.pl.persistence.core.Key getOrganizationID();
  
  
  /**
   * Gets the value of the Parent field.
   * The producer code's parent producer code.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ProducerCode getParent();
  
  
  public gw.pl.persistence.core.Key getParentID();
  
  
  /**
   * Gets the value of the PreferredUnderwriter field.
   * The preferred underwriter for a producer code
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.User getPreferredUnderwriter();
  
  
  public gw.pl.persistence.core.Key getPreferredUnderwriterID();
  
  
  /**
   * Gets the value of the ProducerCodeRoles field.
   * Available roles to a producer code.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ProducerCodeRole[] getProducerCodeRoles();
  
  
  /**
   * Gets the value of the ProducerStatus field.
   * The status of this producer code.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.ProducerStatus getProducerStatus();
  
  
  /**
   * Gets the value of the ProducercodecodeArray field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Producercodecode[] getProducercodecodeArray();
  
  
  /**
   * Gets the value of the TerminationDate field.
   * Indicates when the producer relationship was or will be terminated.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getTerminationDate();
  
  
  /**
   * Gets the value of the UserProducerCodes field.
   * Available producer codes and associated roles to a user.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.UserProducerCode[] getUserProducerCodes();
  
  
  /**
   * Removes the given element from the AffinityGroupProducerCodes array. This is achieved by marking the element for removal.
   */
  public void removeFromAffinityGroupProducerCodes(entity.AffinityGroupProducerCode element);
  
  
  /**
   * Removes the given element from the AffinityGroupProducerCodes array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromAffinityGroupProducerCodes(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the CommissionPlans array. This is achieved by marking the element for removal.
   */
  public void removeFromCommissionPlans(entity.CommissionPlan element);
  
  
  /**
   * Removes the given element from the CommissionPlans array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromCommissionPlans(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the Description_L10N_ARRAY array. This is achieved by marking the element for removal.
   */
  public void removeFromDescription_L10N_ARRAY(entity.ProducerCode_Description_L10N element);
  
  
  /**
   * Removes the given element from the Description_L10N_ARRAY array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromDescription_L10N_ARRAY(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the GroupProducerCodes array. This is achieved by marking the element for removal.
   */
  public void removeFromGroupProducerCodes(entity.GroupProducerCode element);
  
  
  /**
   * Removes the given element from the GroupProducerCodes array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromGroupProducerCodes(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the ProducerCodeRoles array. This is achieved by marking the element for removal.
   */
  public void removeFromProducerCodeRoles(entity.ProducerCodeRole element);
  
  
  /**
   * Removes the given element from the ProducerCodeRoles array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromProducerCodeRoles(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the ProducercodecodeArray array. This is achieved by marking the element for removal.
   */
  public void removeFromProducercodecodeArray(entity.Producercodecode element);
  
  
  /**
   * Removes the given element from the ProducercodecodeArray array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromProducercodecodeArray(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the UserProducerCodes array. This is achieved by marking the element for removal.
   */
  public void removeFromUserProducerCodes(entity.UserProducerCode element);
  
  
  /**
   * Removes the given element from the UserProducerCodes array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromUserProducerCodes(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the Address field.
   */
  public void setAddress(entity.Address value);
  
  
  public void setAddressID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the AddressPublicID field.
   */
  public void setAddressPublicID(java.lang.String value);
  
  
  /**
   * Sets the value of the AffinityGroupProducerCodes field.
   */
  public void setAffinityGroupProducerCodes(entity.AffinityGroupProducerCode[] value);
  
  
  /**
   * Sets the value of the AppointmentDate field.
   */
  public void setAppointmentDate(java.util.Date value);
  
  
  /**
   * Sets the value of the Branch field.
   */
  public void setBranch(entity.Group value);
  
  
  public void setBranchID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Code field.
   */
  public void setCode(java.lang.String value);
  
  
  /**
   * Sets the value of the CodeDenorm field.
   */
  public void setCodeDenorm(java.lang.String value);
  
  
  /**
   * Sets the value of the CommissionPlans field.
   */
  public void setCommissionPlans(entity.CommissionPlan[] value);
  
  
  /**
   * Sets the value of the Description field.
   */
  public void setDescription(java.lang.String value);
  
  
  /**
   * Sets the value of the DescriptionDenorm field.
   */
  public void setDescriptionDenorm(java.lang.String value);
  
  
  /**
   * Sets the value of the Description_L10N_ARRAY field.
   */
  public void setDescription_L10N_ARRAY(entity.ProducerCode_Description_L10N[] value);
  
  
  /**
   * Sets the value of the GroupProducerCodes field.
   */
  public void setGroupProducerCodes(entity.GroupProducerCode[] value);
  
  
  /**
   * Sets the value of the Organization field.
   */
  public void setOrganization(entity.Organization value);
  
  
  public void setOrganizationID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Parent field.
   */
  public void setParent(entity.ProducerCode value);
  
  
  public void setParentID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the PreferredUnderwriter field.
   */
  public void setPreferredUnderwriter(entity.User value);
  
  
  public void setPreferredUnderwriterID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the ProducerCodeRoles field.
   */
  public void setProducerCodeRoles(entity.ProducerCodeRole[] value);
  
  
  /**
   * Sets the value of the ProducerStatus field.
   */
  public void setProducerStatus(typekey.ProducerStatus value);
  
  
  /**
   * Sets the value of the ProducercodecodeArray field.
   */
  public void setProducercodecodeArray(entity.Producercodecode[] value);
  
  
  /**
   * Sets the value of the TerminationDate field.
   */
  public void setTerminationDate(java.util.Date value);
  
  
  /**
   * Sets the value of the UserProducerCodes field.
   */
  public void setUserProducerCodes(entity.UserProducerCode[] value);
  
  
  
}
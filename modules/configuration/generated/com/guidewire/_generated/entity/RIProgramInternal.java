package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "RIProgram.eti;RIProgram.eix;RIProgram.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface RIProgramInternal extends com.guidewire._generated.entity.RetireableInternal, com.guidewire._generated.entity.RIContractInternal, com.guidewire._generated.entity.EventAwareInternal, com.guidewire.pc.domain.reinsurance.RIProgramPublicMethods, com.guidewire.pc.domain.reinsurance.impl.RIProgramInternalMethods, com.guidewire.pl.system.bundle.InsertCallback, com.guidewire.pl.system.bundle.UpdateCallback, gw.api.domain.reinsurance.RICoverageGroupOwner, gw.api.reinsurance.Cedeable {
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String RIPROGRAMADDED_EVENT = "RIProgramAdded";
  
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String RIPROGRAMCHANGED_EVENT = "RIProgramChanged";
  
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String RIPROGRAMREMOVED_EVENT = "RIProgramRemoved";
  
  /**
   * Adds the given element to the Name_L10N_ARRAY array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToName_L10N_ARRAY(entity.RIProgram_Name_L10N element);
  
  
  /**
   * Adds the given element to the ProgramTreaties array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToProgramTreaties(entity.ProgramTreaty element);
  
  
  /**
   * Adds the given element to the RICoverageGroups array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToRICoverageGroups(entity.ProgramCoverageGroup element);
  
  
  /**
   * Gets the value of the CedingRecalcExpirationDate field.
   * Expiration date may change; this field holds the maximum Expiration Date since the prior ceding calculation
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getCedingRecalcExpirationDate();
  
  
  /**
   * Gets the value of the Name field.
   * The name of this contract.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getName();
  
  
  /**
   * Gets the value of the Name_L10N_ARRAY field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.RIProgram_Name_L10N[] getName_L10N_ARRAY();
  
  
  /**
   * Array association for partition Name_L10N_ARRAYByLanguage on array Name_L10N_ARRAY
   */
  public entity.RIProgram_Name_L10N getName_L10N_ARRAYByLanguage(com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo property);
  
  
  /**
   * Gets the value of the ProgramTreaties field.
   * All reinsurance agreements included in this program.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ProgramTreaty[] getProgramTreaties();
  
  
  /**
   * Gets the value of the RICoverageGroups field.
   * All RI coverage groups this agreement applies to.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ProgramCoverageGroup[] getRICoverageGroups();
  
  
  /**
   * Gets the value of the ResponsibleUser field.
   * The last user to update the program
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.User getResponsibleUser();
  
  
  public gw.pl.persistence.core.Key getResponsibleUserID();
  
  
  /**
   * Gets the value of the SingleRiskMaximum field.
   * A value that the user can set to show their intended max number. This may also be used by rules to decide whether a risk falls within the max allowed by the program.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getSingleRiskMaximum();
  
  
  /**
   * Gets the value of the SingleRiskMaximum_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getSingleRiskMaximum_amt();
  
  
  /**
   * Gets the value of the SingleRiskMaximum_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getSingleRiskMaximum_cur();
  
  
  /**
   * Gets the value of the TargetMaxRetention field.
   * The net amount of risk which the ceding company
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getTargetMaxRetention();
  
  
  /**
   * Gets the value of the TargetMaxRetention_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getTargetMaxRetention_amt();
  
  
  /**
   * Gets the value of the TargetMaxRetention_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getTargetMaxRetention_cur();
  
  
  /**
   * Gets the value of the RequiresRecalculation field.
   * Indicates if this Program has been modified and requires a recalculation of any related Ceded Premiums
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isRequiresRecalculation();
  
  
  /**
   * Removes the given element from the Name_L10N_ARRAY array. This is achieved by marking the element for removal.
   */
  public void removeFromName_L10N_ARRAY(entity.RIProgram_Name_L10N element);
  
  
  /**
   * Removes the given element from the Name_L10N_ARRAY array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromName_L10N_ARRAY(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the ProgramTreaties array. This is achieved by marking the element for removal.
   */
  public void removeFromProgramTreaties(entity.ProgramTreaty element);
  
  
  /**
   * Removes the given element from the ProgramTreaties array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromProgramTreaties(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the RICoverageGroups array. This is achieved by marking the element for removal.
   */
  public void removeFromRICoverageGroups(entity.ProgramCoverageGroup element);
  
  
  /**
   * Removes the given element from the RICoverageGroups array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromRICoverageGroups(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the CedingRecalcExpirationDate field.
   */
  public void setCedingRecalcExpirationDate(java.util.Date value);
  
  
  /**
   * Sets the value of the Name field.
   */
  public void setName(java.lang.String value);
  
  
  /**
   * Sets the value of the Name_L10N_ARRAY field.
   */
  public void setName_L10N_ARRAY(entity.RIProgram_Name_L10N[] value);
  
  
  /**
   * Sets the value of the ProgramTreaties field.
   */
  public void setProgramTreaties(entity.ProgramTreaty[] value);
  
  
  /**
   * Sets the value of the RICoverageGroups field.
   */
  public void setRICoverageGroups(entity.ProgramCoverageGroup[] value);
  
  
  /**
   * Sets the value of the RequiresRecalculation field.
   */
  public void setRequiresRecalculation(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the ResponsibleUser field.
   */
  public void setResponsibleUser(entity.User value);
  
  
  public void setResponsibleUserID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the SingleRiskMaximum field.
   */
  public void setSingleRiskMaximum(gw.pl.currency.MonetaryAmount value);
  
  
  /**
   * Sets the value of the SingleRiskMaximum_amt field.
   */
  public void setSingleRiskMaximum_amt(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the SingleRiskMaximum_cur field.
   */
  public void setSingleRiskMaximum_cur(typekey.Currency value);
  
  
  /**
   * Sets the value of the TargetMaxRetention field.
   */
  public void setTargetMaxRetention(gw.pl.currency.MonetaryAmount value);
  
  
  /**
   * Sets the value of the TargetMaxRetention_amt field.
   */
  public void setTargetMaxRetention_amt(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the TargetMaxRetention_cur field.
   */
  public void setTargetMaxRetention_cur(typekey.Currency value);
  
  
  
}
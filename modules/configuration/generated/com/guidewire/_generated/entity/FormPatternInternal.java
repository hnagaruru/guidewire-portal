package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "FormPattern.eti;FormPattern.eix;FormPattern.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface FormPatternInternal extends com.guidewire._generated.entity.RetireableInternal, com.guidewire.pc.domain.form.FormPatternPublicMethods, com.guidewire.pl.system.bundle.InsertCallback, com.guidewire.pl.system.bundle.UpdateCallback {
  /**
   * Adds the given element to the Description_L10N_ARRAY array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToDescription_L10N_ARRAY(entity.FormPattern_Description_L10N element);
  
  
  /**
   * Adds the given element to the FormPatternAdditionalInsuredTypes array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToFormPatternAdditionalInsuredTypes(entity.FormPatternAdditionalInsuredType element);
  
  
  /**
   * Adds the given element to the FormPatternAdditionalInterestTypes array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToFormPatternAdditionalInterestTypes(entity.FormPatternAdditionalInterestType element);
  
  
  /**
   * Adds the given element to the FormPatternCovTerms array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToFormPatternCovTerms(entity.FormPatternCovTerm element);
  
  
  /**
   * Adds the given element to the FormPatternCoverableProperties array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToFormPatternCoverableProperties(entity.FormPatternCoverableProperty element);
  
  
  /**
   * Adds the given element to the FormPatternCoveragePartTypes array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToFormPatternCoveragePartTypes(entity.FormPatternCoveragePartType element);
  
  
  /**
   * Adds the given element to the FormPatternJobs array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToFormPatternJobs(entity.FormPatternJob element);
  
  
  /**
   * Adds the given element to the FormPatternProducts array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToFormPatternProducts(entity.FormPatternProduct element);
  
  
  /**
   * Adds the given element to the Lookups array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToLookups(entity.FormPatternLookup element);
  
  
  /**
   * Gets the value of the ClausePatternCode field.
   * The clause pattern associated with this form pattern (used by GenericClauseSelectionForm and GenericCovTermSelectionForm).
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getClausePatternCode();
  
  
  /**
   * Gets the value of the Code field.
   * The Unique ID of the form
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCode();
  
  
  /**
   * Gets the value of the CoverableType field.
   * Fully-qualified name of the Coverable entity type used to infer this form (used by GenericCoverableTypeKeyForm).
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCoverableType();
  
  
  /**
   * Gets the value of the CoverableTypeKey field.
   * Code of the TypeKey value on CoverableTypeList used to infer this form (used by GenericCoverableTypeKeyForm).
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCoverableTypeKey();
  
  
  /**
   * Gets the value of the CoverableTypeList field.
   * Name of the TypeList field on CoverableType used to infer this form (used by GenericCoverableTypeKeyForm).
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCoverableTypeList();
  
  
  /**
   * Gets the value of the Description field.
   * The human-readable name/description of the form
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getDescription();
  
  
  /**
   * Gets the value of the Description_L10N_ARRAY field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.FormPattern_Description_L10N[] getDescription_L10N_ARRAY();
  
  
  /**
   * Array association for partition Description_L10N_ARRAYByLanguage on array Description_L10N_ARRAY
   */
  public entity.FormPattern_Description_L10N getDescription_L10N_ARRAYByLanguage(com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo property);
  
  
  /**
   * Gets the value of the Edition field.
   * The edition of the form, as the string MM YY
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getEdition();
  
  
  /**
   * Gets the value of the FormNumber field.
   * The number of the form, which is set in the FormNumber field of a Form inferred from this pattern
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getFormNumber();
  
  
  /**
   * Gets the value of the FormPatternAdditionalInsuredTypes field.
   * Additional Insured types associated with this form pattern.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.FormPatternAdditionalInsuredType[] getFormPatternAdditionalInsuredTypes();
  
  
  /**
   * Gets the value of the FormPatternAdditionalInterestTypes field.
   * Additional Interest types associated with this form pattern.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.FormPatternAdditionalInterestType[] getFormPatternAdditionalInterestTypes();
  
  
  /**
   * Gets the value of the FormPatternCovTerms field.
   * Cov Term patterns associated with this form pattern's selected clause pattern.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.FormPatternCovTerm[] getFormPatternCovTerms();
  
  
  /**
   * Gets the value of the FormPatternCoverableProperties field.
   * The properties of a coverable associated with this form pattern's selected clause pattern.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.FormPatternCoverableProperty[] getFormPatternCoverableProperties();
  
  
  /**
   * Gets the value of the FormPatternCoveragePartTypes field.
   * Coverage part types associated with this form pattern.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.FormPatternCoveragePartType[] getFormPatternCoveragePartTypes();
  
  
  /**
   * Gets the value of the FormPatternJobs field.
   * Jobs associated with this form pattern.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.FormPatternJob[] getFormPatternJobs();
  
  
  /**
   * Gets the value of the FormPatternProducts field.
   * Products associated with this form pattern.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.FormPatternProduct[] getFormPatternProducts();
  
  
  /**
   * Gets the value of the GenericInferenceClass field.
   * Fully-qualified name of generic form inference class, used if CustomFormInference system table has no entry for this form.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getGenericInferenceClass();
  
  
  /**
   * Gets the value of the InferenceTime field.
   * Determines when data related to the form is gathered
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.FormInferenceTime getInferenceTime();
  
  
  /**
   * Gets the value of the InternalGroupCode field.
   * Unique code that groups a set of forms that, for jurisdictional replacement reasons, need to be processed together.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getInternalGroupCode();
  
  
  /**
   * Gets the value of the Lookups field.
   * Availability lookups associated with this form pattern.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.FormPatternLookup[] getLookups();
  
  
  /**
   * Gets the value of the PolicyLinePatternCode field.
   * If this is a line-specific form, the Code of the associated PolicyLinePattern.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPolicyLinePatternCode();
  
  
  /**
   * Gets the value of the Priority field.
   * Determines processing order of form patterns
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getPriority();
  
  
  /**
   * Gets the value of the RefCode field.
   * For customer integration purposes; unused by Guidewire
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getRefCode();
  
  
  /**
   * Gets the value of the RemovalEndorsementFormNumber field.
   * The form number of the removal endorsement that handles this form's removal/replacement.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getRemovalEndorsementFormNumber();
  
  
  /**
   * Gets the value of the UseInsteadOfCode field.
   * Code of another form pattern to be replaced (within the same group) during jurisdictional replacement.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getUseInsteadOfCode();
  
  
  /**
   * Gets the value of the CoverableTypeKeyExistsOnAll field.
   * Must the CoverableTypeKey value be selected on all instances of the coverable on this form's policy line? (used by GenericCoverableTypeKeyForm)
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isCoverableTypeKeyExistsOnAll();
  
  
  /**
   * Gets the value of the EndorsementNumbered field.
   * True if the form is endorsement numbered
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isEndorsementNumbered();
  
  
  /**
   * Gets the value of the InternalReissueOnChange field.
   * Form is reissued when its contents change. If false, could either mean that it is a blanket notice that doesn't require changes or that any changes following the initial form issuance will happen via targeted endorsements.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isInternalReissueOnChange();
  
  
  /**
   * Gets the value of the InternalRemovalEndorsement field.
   * Form is a removal endorsement, generated for removals or replacements. Removal endorsements must be contract forms and are always processed last so that they can have access to the set of forms that will need to be removed.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isInternalRemovalEndorsement();
  
  
  /**
   * Gets the value of the PatternExistsOnAll field.
   * Must the product model pattern exist on all the instances of its parent that exist on the policy? (used by GenericClauseSelectionForm and GenericCovTermSelectionForm)
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isPatternExistsOnAll();
  
  
  /**
   * Removes the given element from the Description_L10N_ARRAY array. This is achieved by marking the element for removal.
   */
  public void removeFromDescription_L10N_ARRAY(entity.FormPattern_Description_L10N element);
  
  
  /**
   * Removes the given element from the Description_L10N_ARRAY array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromDescription_L10N_ARRAY(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the FormPatternAdditionalInsuredTypes array. This is achieved by marking the element for removal.
   */
  public void removeFromFormPatternAdditionalInsuredTypes(entity.FormPatternAdditionalInsuredType element);
  
  
  /**
   * Removes the given element from the FormPatternAdditionalInsuredTypes array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromFormPatternAdditionalInsuredTypes(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the FormPatternAdditionalInterestTypes array. This is achieved by marking the element for removal.
   */
  public void removeFromFormPatternAdditionalInterestTypes(entity.FormPatternAdditionalInterestType element);
  
  
  /**
   * Removes the given element from the FormPatternAdditionalInterestTypes array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromFormPatternAdditionalInterestTypes(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the FormPatternCovTerms array. This is achieved by marking the element for removal.
   */
  public void removeFromFormPatternCovTerms(entity.FormPatternCovTerm element);
  
  
  /**
   * Removes the given element from the FormPatternCovTerms array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromFormPatternCovTerms(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the FormPatternCoverableProperties array. This is achieved by marking the element for removal.
   */
  public void removeFromFormPatternCoverableProperties(entity.FormPatternCoverableProperty element);
  
  
  /**
   * Removes the given element from the FormPatternCoverableProperties array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromFormPatternCoverableProperties(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the FormPatternCoveragePartTypes array. This is achieved by marking the element for removal.
   */
  public void removeFromFormPatternCoveragePartTypes(entity.FormPatternCoveragePartType element);
  
  
  /**
   * Removes the given element from the FormPatternCoveragePartTypes array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromFormPatternCoveragePartTypes(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the FormPatternJobs array. This is achieved by marking the element for removal.
   */
  public void removeFromFormPatternJobs(entity.FormPatternJob element);
  
  
  /**
   * Removes the given element from the FormPatternJobs array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromFormPatternJobs(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the FormPatternProducts array. This is achieved by marking the element for removal.
   */
  public void removeFromFormPatternProducts(entity.FormPatternProduct element);
  
  
  /**
   * Removes the given element from the FormPatternProducts array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromFormPatternProducts(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the Lookups array. This is achieved by marking the element for removal.
   */
  public void removeFromLookups(entity.FormPatternLookup element);
  
  
  /**
   * Removes the given element from the Lookups array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromLookups(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the ClausePatternCode field.
   */
  public void setClausePatternCode(java.lang.String value);
  
  
  /**
   * Sets the value of the Code field.
   */
  public void setCode(java.lang.String value);
  
  
  /**
   * Sets the value of the CoverableType field.
   */
  public void setCoverableType(java.lang.String value);
  
  
  /**
   * Sets the value of the CoverableTypeKey field.
   */
  public void setCoverableTypeKey(java.lang.String value);
  
  
  /**
   * Sets the value of the CoverableTypeKeyExistsOnAll field.
   */
  public void setCoverableTypeKeyExistsOnAll(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the CoverableTypeList field.
   */
  public void setCoverableTypeList(java.lang.String value);
  
  
  /**
   * Sets the value of the Description field.
   */
  public void setDescription(java.lang.String value);
  
  
  /**
   * Sets the value of the Description_L10N_ARRAY field.
   */
  public void setDescription_L10N_ARRAY(entity.FormPattern_Description_L10N[] value);
  
  
  /**
   * Sets the value of the Edition field.
   */
  public void setEdition(java.lang.String value);
  
  
  /**
   * Sets the value of the EndorsementNumbered field.
   */
  public void setEndorsementNumbered(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the FormNumber field.
   */
  public void setFormNumber(java.lang.String value);
  
  
  /**
   * Sets the value of the FormPatternAdditionalInsuredTypes field.
   */
  public void setFormPatternAdditionalInsuredTypes(entity.FormPatternAdditionalInsuredType[] value);
  
  
  /**
   * Sets the value of the FormPatternAdditionalInterestTypes field.
   */
  public void setFormPatternAdditionalInterestTypes(entity.FormPatternAdditionalInterestType[] value);
  
  
  /**
   * Sets the value of the FormPatternCovTerms field.
   */
  public void setFormPatternCovTerms(entity.FormPatternCovTerm[] value);
  
  
  /**
   * Sets the value of the FormPatternCoverableProperties field.
   */
  public void setFormPatternCoverableProperties(entity.FormPatternCoverableProperty[] value);
  
  
  /**
   * Sets the value of the FormPatternCoveragePartTypes field.
   */
  public void setFormPatternCoveragePartTypes(entity.FormPatternCoveragePartType[] value);
  
  
  /**
   * Sets the value of the FormPatternJobs field.
   */
  public void setFormPatternJobs(entity.FormPatternJob[] value);
  
  
  /**
   * Sets the value of the FormPatternProducts field.
   */
  public void setFormPatternProducts(entity.FormPatternProduct[] value);
  
  
  /**
   * Sets the value of the GenericInferenceClass field.
   */
  public void setGenericInferenceClass(java.lang.String value);
  
  
  /**
   * Sets the value of the InferenceTime field.
   */
  public void setInferenceTime(typekey.FormInferenceTime value);
  
  
  /**
   * Sets the value of the InternalGroupCode field.
   */
  public void setInternalGroupCode(java.lang.String value);
  
  
  /**
   * Sets the value of the InternalReissueOnChange field.
   */
  public void setInternalReissueOnChange(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the InternalRemovalEndorsement field.
   */
  public void setInternalRemovalEndorsement(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the Lookups field.
   */
  public void setLookups(entity.FormPatternLookup[] value);
  
  
  /**
   * Sets the value of the PatternExistsOnAll field.
   */
  public void setPatternExistsOnAll(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the PolicyLinePatternCode field.
   */
  public void setPolicyLinePatternCode(java.lang.String value);
  
  
  /**
   * Sets the value of the Priority field.
   */
  public void setPriority(java.lang.Integer value);
  
  
  /**
   * Sets the value of the RefCode field.
   */
  public void setRefCode(java.lang.String value);
  
  
  /**
   * Sets the value of the RemovalEndorsementFormNumber field.
   */
  public void setRemovalEndorsementFormNumber(java.lang.String value);
  
  
  /**
   * Sets the value of the UseInsteadOfCode field.
   */
  public void setUseInsteadOfCode(java.lang.String value);
  
  
  
}
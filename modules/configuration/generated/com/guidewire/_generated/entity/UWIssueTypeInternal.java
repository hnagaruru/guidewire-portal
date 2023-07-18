package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "UWIssueType.eti;UWIssueType.eix;UWIssueType.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface UWIssueTypeInternal extends com.guidewire._generated.entity.RetireableInternal, com.guidewire._generated.entity.RuleVersionDependentInternal, com.guidewire._generated.entity.ValidatableInternal, com.guidewire.bizrules.management.RuleVersionAwareInternal, com.guidewire.pc.domain.community.UWIssueTypePublicMethods, com.guidewire.pl.system.bundle.CommitCallback, gw.bizrules.domain.RuleVersionDependent {
  /**
   * Adds the given element to the Description_L10N_ARRAY array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToDescription_L10N_ARRAY(entity.UWIssueType_Description_L10N element);
  
  
  /**
   * Adds the given element to the Name_L10N_ARRAY array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToName_L10N_ARRAY(entity.UWIssueType_Name_L10N element);
  
  
  /**
   * Adds the given element to the UWRuleArray array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToUWRuleArray(entity.UWRule element);
  
  
  /**
   * Gets the value of the BlockingPoint field.
   * The point at which this issue should block progress of a job
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.UWIssueBlockingPoint getBlockingPoint();
  
  
  /**
   * Gets the value of the CheckingSet field.
   * The point at which issues of this type are created.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.UWIssueCheckingSet getCheckingSet();
  
  
  /**
   * Gets the value of the Code field.
   * The concise name of the issue type, used to identify the issue within rules.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCode();
  
  
  /**
   * Gets the value of the Comparator field.
   * The comparator to use with this issue
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.ValueComparator getComparator();
  
  
  /**
   * Gets the value of the DefaultApprovalBlockingPoint field.
   * Default point to which an approval can advance this job.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.UWIssueBlockingPoint getDefaultApprovalBlockingPoint();
  
  
  /**
   * Gets the value of the DefaultDurationType field.
   * Default value for the duration type
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.UWApprovalDurationType getDefaultDurationType();
  
  
  /**
   * Gets the value of the DefaultValueAssignmentType field.
   * Specifies the mechanism by which a default value is assigned to the "Reference Value"
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.UWValueAssignmentType getDefaultValueAssignmentType();
  
  
  /**
   * Gets the value of the DefaultValueOffsetAmount field.
   * The numeric amount of offset to apply to the original "Reference Value" in order compute a default value for the approval.  This value is ignored when the "DefaultValueAssignmentType" is "Fixed"
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getDefaultValueOffsetAmount();
  
  
  /**
   * Gets the value of the DefaultValueOffsetCurrency field.
   * Currency to be used for the DefaultValueOffsetAmount if the comparator is a MonetaryAmount one and the DefaultValueAssignmentType is OffsetAmount.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getDefaultValueOffsetCurrency();
  
  
  /**
   * Gets the value of the Description field.
   * @deprecated The more human-readable description of the issue type.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getDescription();
  
  
  /**
   * Gets the value of the Description_L10N_ARRAY field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.UWIssueType_Description_L10N[] getDescription_L10N_ARRAY();
  
  
  /**
   * Array association for partition Description_L10N_ARRAYByLanguage on array Description_L10N_ARRAY
   */
  public entity.UWIssueType_Description_L10N getDescription_L10N_ARRAYByLanguage(com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo property);
  
  
  /**
   * Gets the value of the Name field.
   * @deprecated The more human-readable name of the issue type.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getName();
  
  
  /**
   * Gets the value of the Name_L10N_ARRAY field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.UWIssueType_Name_L10N[] getName_L10N_ARRAY();
  
  
  /**
   * Array association for partition Name_L10N_ARRAYByLanguage on array Name_L10N_ARRAY
   */
  public entity.UWIssueType_Name_L10N getName_L10N_ARRAYByLanguage(com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo property);
  
  
  /**
   * Gets the value of the UWRule field.
   * The corresponding UWRule for this UWIssue
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.UWRule getUWRule();
  
  
  /**
   * Gets the value of the UWRuleArray field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.UWRule[] getUWRuleArray();
  
  
  public gw.pl.persistence.core.Key getUWRuleID();
  
  
  /**
   * Gets the value of the ValueFormatterType field.
   * The type of the formatter to be used for issue and grant values of this issue type
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.ValueFormatterType getValueFormatterType();
  
  
  /**
   * Gets the value of the AutoApprovable field.
   * Whether or not this issue defines an automatically approvable issue.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isAutoApprovable();
  
  
  /**
   * Gets the value of the DefaultEditBeforeBind field.
   * Default value for the edit before bind flag
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isDefaultEditBeforeBind();
  
  
  /**
   * Removes the given element from the Description_L10N_ARRAY array. This is achieved by marking the element for removal.
   */
  public void removeFromDescription_L10N_ARRAY(entity.UWIssueType_Description_L10N element);
  
  
  /**
   * Removes the given element from the Description_L10N_ARRAY array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromDescription_L10N_ARRAY(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the Name_L10N_ARRAY array. This is achieved by marking the element for removal.
   */
  public void removeFromName_L10N_ARRAY(entity.UWIssueType_Name_L10N element);
  
  
  /**
   * Removes the given element from the Name_L10N_ARRAY array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromName_L10N_ARRAY(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the UWRuleArray array. This is achieved by marking the element for removal.
   */
  public void removeFromUWRuleArray(entity.UWRule element);
  
  
  /**
   * Removes the given element from the UWRuleArray array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromUWRuleArray(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the AutoApprovable field.
   */
  public void setAutoApprovable(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the BlockingPoint field.
   */
  public void setBlockingPoint(typekey.UWIssueBlockingPoint value);
  
  
  /**
   * Sets the value of the CheckingSet field.
   */
  public void setCheckingSet(typekey.UWIssueCheckingSet value);
  
  
  /**
   * Sets the value of the Code field.
   */
  public void setCode(java.lang.String value);
  
  
  /**
   * Sets the value of the Comparator field.
   */
  public void setComparator(typekey.ValueComparator value);
  
  
  /**
   * Sets the value of the DefaultApprovalBlockingPoint field.
   */
  public void setDefaultApprovalBlockingPoint(typekey.UWIssueBlockingPoint value);
  
  
  /**
   * Sets the value of the DefaultDurationType field.
   */
  public void setDefaultDurationType(typekey.UWApprovalDurationType value);
  
  
  /**
   * Sets the value of the DefaultEditBeforeBind field.
   */
  public void setDefaultEditBeforeBind(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the DefaultValueAssignmentType field.
   */
  public void setDefaultValueAssignmentType(typekey.UWValueAssignmentType value);
  
  
  /**
   * Sets the value of the DefaultValueOffsetAmount field.
   */
  public void setDefaultValueOffsetAmount(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the DefaultValueOffsetCurrency field.
   */
  public void setDefaultValueOffsetCurrency(typekey.Currency value);
  
  
  /**
   * Sets the value of the Description field.
   * @deprecated The more human-readable description of the issue type.
   */
  @java.lang.Deprecated
  public void setDescription(java.lang.String value);
  
  
  /**
   * Sets the value of the Description_L10N_ARRAY field.
   */
  public void setDescription_L10N_ARRAY(entity.UWIssueType_Description_L10N[] value);
  
  
  /**
   * Sets the value of the Name field.
   * @deprecated The more human-readable name of the issue type.
   */
  @java.lang.Deprecated
  public void setName(java.lang.String value);
  
  
  /**
   * Sets the value of the Name_L10N_ARRAY field.
   */
  public void setName_L10N_ARRAY(entity.UWIssueType_Name_L10N[] value);
  
  
  /**
   * Sets the value of the UWRule field.
   */
  public void setUWRule(entity.UWRule value);
  
  
  /**
   * Sets the value of the UWRuleArray field.
   */
  public void setUWRuleArray(entity.UWRule[] value);
  
  
  public void setUWRuleID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the ValueFormatterType field.
   */
  public void setValueFormatterType(typekey.ValueFormatterType value);
  
  
  
}
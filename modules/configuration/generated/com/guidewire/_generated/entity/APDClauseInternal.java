package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "APDClause.eti;APDClause.eix;APDClause.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface APDClauseInternal extends com.guidewire._generated.entity.RetireableInternal, com.guidewire.pc.domain.apd.APDClausePublicMethods {
  /**
   * Adds the given element to the Description_L10N_ARRAY array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToDescription_L10N_ARRAY(entity.APDClause_Description_L10N element);
  
  
  /**
   * Adds the given element to the Name_L10N_ARRAY array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToName_L10N_ARRAY(entity.APDClause_Name_L10N element);
  
  
  /**
   * Adds the given element to the ParentclauseedgeArray array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToParentclauseedgeArray(entity.Parentclauseedge element);
  
  
  /**
   * Adds the given element to the Rules array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToRules(entity.APDClauseRule element);
  
  
  /**
   * Adds the given element to the Terms array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToTerms(entity.APDTerm element);
  
  
  /**
   * Gets the value of the ClauseCategory field.
   * The UI category to which the clause belongs
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDClauseCategory getClauseCategory();
  
  
  public gw.pl.persistence.core.Key getClauseCategoryID();
  
  
  /**
   * Gets the value of the CodeIdentifier field.
   * The code used within the product model to identify this clause
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCodeIdentifier();
  
  
  /**
   * Gets the value of the Coverable field.
   * The risk object that has this cover
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDCoverable getCoverable();
  
  
  public gw.pl.persistence.core.Key getCoverableID();
  
  
  /**
   * Gets the value of the Description field.
   * A description of the clause
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getDescription();
  
  
  /**
   * Gets the value of the Description_L10N_ARRAY field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDClause_Description_L10N[] getDescription_L10N_ARRAY();
  
  
  /**
   * Array association for partition Description_L10N_ARRAYByLanguage on array Description_L10N_ARRAY
   */
  public entity.APDClause_Description_L10N getDescription_L10N_ARRAYByLanguage(com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo property);
  
  
  /**
   * Gets the value of the Name field.
   * The name of the clause as displayed in the UI
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getName();
  
  
  /**
   * Gets the value of the Name_L10N_ARRAY field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDClause_Name_L10N[] getName_L10N_ARRAY();
  
  
  /**
   * Array association for partition Name_L10N_ARRAYByLanguage on array Name_L10N_ARRAY
   */
  public entity.APDClause_Name_L10N getName_L10N_ARRAYByLanguage(com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo property);
  
  
  /**
   * Gets the value of the ParentClause field.
   * The parent clause of this clause
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDClause getParentClause();
  
  
  public gw.pl.persistence.core.Key getParentClauseID();
  
  
  /**
   * Gets the value of the ParentclauseedgeArray field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Parentclauseedge[] getParentclauseedgeArray();
  
  
  /**
   * Gets the value of the Rules field.
   * Rules that apply to this clause
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDClauseRule[] getRules();
  
  
  /**
   * Gets the value of the ScheduledItem field.
   * Scheduled item
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDScheduledItem getScheduledItem();
  
  
  public gw.pl.persistence.core.Key getScheduledItemID();
  
  
  /**
   * Gets the value of the Sequence field.
   * The sequence the clauses are to be listed
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getSequence();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.APDClause getSubtype();
  
  
  /**
   * Gets the value of the Terms field.
   * The terms that qualify this clause
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDTerm[] getTerms();
  
  
  /**
   * Removes the given element from the Description_L10N_ARRAY array. This is achieved by marking the element for removal.
   */
  public void removeFromDescription_L10N_ARRAY(entity.APDClause_Description_L10N element);
  
  
  /**
   * Removes the given element from the Description_L10N_ARRAY array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromDescription_L10N_ARRAY(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the Name_L10N_ARRAY array. This is achieved by marking the element for removal.
   */
  public void removeFromName_L10N_ARRAY(entity.APDClause_Name_L10N element);
  
  
  /**
   * Removes the given element from the Name_L10N_ARRAY array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromName_L10N_ARRAY(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the ParentclauseedgeArray array. This is achieved by marking the element for removal.
   */
  public void removeFromParentclauseedgeArray(entity.Parentclauseedge element);
  
  
  /**
   * Removes the given element from the ParentclauseedgeArray array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromParentclauseedgeArray(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the Rules array. This is achieved by marking the element for removal.
   */
  public void removeFromRules(entity.APDClauseRule element);
  
  
  /**
   * Removes the given element from the Rules array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromRules(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the Terms array. This is achieved by marking the element for removal.
   */
  public void removeFromTerms(entity.APDTerm element);
  
  
  /**
   * Removes the given element from the Terms array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromTerms(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the ClauseCategory field.
   */
  public void setClauseCategory(entity.APDClauseCategory value);
  
  
  public void setClauseCategoryID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the CodeIdentifier field.
   */
  public void setCodeIdentifier(java.lang.String value);
  
  
  /**
   * Sets the value of the Coverable field.
   */
  public void setCoverable(entity.APDCoverable value);
  
  
  public void setCoverableID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Description field.
   */
  public void setDescription(java.lang.String value);
  
  
  /**
   * Sets the value of the Description_L10N_ARRAY field.
   */
  public void setDescription_L10N_ARRAY(entity.APDClause_Description_L10N[] value);
  
  
  /**
   * Sets the value of the Name field.
   */
  public void setName(java.lang.String value);
  
  
  /**
   * Sets the value of the Name_L10N_ARRAY field.
   */
  public void setName_L10N_ARRAY(entity.APDClause_Name_L10N[] value);
  
  
  /**
   * Sets the value of the ParentClause field.
   */
  public void setParentClause(entity.APDClause value);
  
  
  public void setParentClauseID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the ParentclauseedgeArray field.
   */
  public void setParentclauseedgeArray(entity.Parentclauseedge[] value);
  
  
  /**
   * Sets the value of the Rules field.
   */
  public void setRules(entity.APDClauseRule[] value);
  
  
  /**
   * Sets the value of the ScheduledItem field.
   */
  public void setScheduledItem(entity.APDScheduledItem value);
  
  
  public void setScheduledItemID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Sequence field.
   */
  public void setSequence(java.lang.Integer value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.APDClause value);
  
  
  /**
   * Sets the value of the Terms field.
   */
  public void setTerms(entity.APDTerm[] value);
  
  
  
}
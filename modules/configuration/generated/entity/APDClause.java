package entity;

/**
 * APDClause
 * Clause definition
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "APDClause.eti;APDClause.eix;APDClause.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
public abstract class APDClause extends com.guidewire.pl.persistence.code.BeanBase implements entity.Retireable {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.APDClause> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.APDClause>("entity.APDClause");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> BEANVERSION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "BeanVersion");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> CLAUSECATEGORY_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "ClauseCategory");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CODEIDENTIFIER_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CodeIdentifier");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> COVERABLE_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "Coverable");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CREATETIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CreateTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> CREATEUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "CreateUser");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> DESCRIPTION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Description");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> DESCRIPTION_L10N_ARRAY_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "Description_L10N_ARRAY");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> NAME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Name");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> NAME_L10N_ARRAY_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "Name_L10N_ARRAY");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> PARENTCLAUSE_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "ParentClause");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> PARENTCLAUSEEDGEARRAY_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "ParentclauseedgeArray");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PUBLICID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PublicID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> RETIREDVALUE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "RetiredValue");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> RULES_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "Rules");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> SCHEDULEDITEM_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "ScheduledItem");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> SEQUENCE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Sequence");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> SUBTYPE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "Subtype");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> TERMS_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "Terms");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> UPDATETIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "UpdateTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> UPDATEUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "UpdateUser");
  
  private com.guidewire.pl.persistence.code.DelegateLoader _delegateManager;
  
  private com.guidewire._generated.entity.APDClauseInternal _internal;
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> RETIRED_DYNPROP = com.guidewire.pl.domain.persistence.core.RetireablePublicMethods.RETIRED_DYNPROP;
  
  protected APDClause(java.lang.Void ignored)  {
    
  }
  
  protected abstract com.guidewire._generated.entity.APDClauseInternal __createInternalInterface();
  
  
  protected final com.guidewire.pl.persistence.code.DelegateLoader __getDelegateManager() {
    if(_delegateManager == null) {
      _delegateManager  =  com.guidewire.pl.persistence.code.DelegateLoader.newInstance(this, __getDelegateMap());
    };
    return _delegateManager;
  }
  
  protected abstract com.guidewire.pl.persistence.code.DelegateMap __getDelegateMap();
  
  
  protected com.guidewire._generated.entity.APDClauseInternal __getInternalInterface() {
    if(_internal == null) {
      _internal  =  __createInternalInterface();
    };
    return _internal;
  }
  
  /**
   * Adds the given element to the Rules array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToRules(entity.APDClauseRule element) {
    __getInternalInterface().addArrayElement(RULES_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the Terms array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToTerms(entity.APDTerm element) {
    __getInternalInterface().addArrayElement(TERMS_PROP.get(), element);
  }
  
  /**
   * 
   * @return A copy of the current bean and a deep copy of all owned array elements
   */
  public entity.KeyableBean copy() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).copy();
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getBeanVersion() {
    return ((com.guidewire.pl.domain.persistence.core.VersionablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods")).getBeanVersion();
  }
  
  /**
   * Gets the value of the ClauseCategory field.
   * The UI category to which the clause belongs
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDClauseCategory getClauseCategory() {
    return (entity.APDClauseCategory)__getInternalInterface().getFieldValue(CLAUSECATEGORY_PROP.get());
  }
  
  /**
   * Gets the value of the CodeIdentifier field.
   * The code used within the product model to identify this clause
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCodeIdentifier() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(CODEIDENTIFIER_PROP.get());
  }
  
  /**
   * Gets the value of the Coverable field.
   * The risk object that has this cover
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDCoverable getCoverable() {
    return (entity.APDCoverable)__getInternalInterface().getFieldValue(COVERABLE_PROP.get());
  }
  
  /**
   * Gets the value of the CreateTime field.
   * Timestamp when the object was created
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getCreateTime() {
    return (java.util.Date)__getInternalInterface().getFieldValue(CREATETIME_PROP.get());
  }
  
  /**
   * Gets the value of the CreateUser field.
   * User who created the object
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.User getCreateUser() {
    return (entity.User)__getInternalInterface().getFieldValue(CREATEUSER_PROP.get());
  }
  
  /**
   * Gets the value of the Description field.
   * A description of the clause
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getDescription() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(DESCRIPTION_PROP.get());
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDClause_Description_L10N[] getDescription_L10N_ARRAY() {
    return (entity.APDClause_Description_L10N[])__getInternalInterface().getFieldValue(DESCRIPTION_L10N_ARRAY_PROP.get());
  }
  
  /**
   * Array association accessor for key en_US on array Description_L10N_ARRAY
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getDescription_en_US() {
    return (java.lang.String)__getInternalInterface().getLocalizedFieldValueForCodeGen((com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo)TYPE.get().getTypeInfo().getProperty("Description_en_US"));
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.persistence.core.Key getID() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getID();
  }
  
  /**
   * Gets the value of the Name field.
   * The name of the clause as displayed in the UI
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getName() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(NAME_PROP.get());
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDClause_Name_L10N[] getName_L10N_ARRAY() {
    return (entity.APDClause_Name_L10N[])__getInternalInterface().getFieldValue(NAME_L10N_ARRAY_PROP.get());
  }
  
  /**
   * Array association accessor for key en_US on array Name_L10N_ARRAY
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getName_en_US() {
    return (java.lang.String)__getInternalInterface().getLocalizedFieldValueForCodeGen((com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo)TYPE.get().getTypeInfo().getProperty("Name_en_US"));
  }
  
  /**
   * Gets the value of the ParentClause field.
   * The parent clause of this clause
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDClause getParentClause() {
    return (entity.APDClause)__getInternalInterface().getFieldValue(PARENTCLAUSE_PROP.get());
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Parentclauseedge[] getParentclauseedgeArray() {
    return (entity.Parentclauseedge[])__getInternalInterface().getFieldValue(PARENTCLAUSEEDGEARRAY_PROP.get());
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPublicID() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getPublicID();
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getRetiredValue() {
    return (java.lang.Long)__getInternalInterface().getFieldValue(RETIREDVALUE_PROP.get());
  }
  
  /**
   * Gets the value of the Rules field.
   * Rules that apply to this clause
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDClauseRule[] getRules() {
    return (entity.APDClauseRule[])__getInternalInterface().getFieldValue(RULES_PROP.get());
  }
  
  /**
   * Gets the value of the ScheduledItem field.
   * Scheduled item
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDScheduledItem getScheduledItem() {
    return (entity.APDScheduledItem)__getInternalInterface().getFieldValue(SCHEDULEDITEM_PROP.get());
  }
  
  /**
   * Gets the value of the Sequence field.
   * The sequence the clauses are to be listed
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getSequence() {
    return (java.lang.Integer)__getInternalInterface().getFieldValue(SEQUENCE_PROP.get());
  }
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.APDClause getSubtype() {
    return (typekey.APDClause)__getInternalInterface().getFieldValue(SUBTYPE_PROP.get());
  }
  
  /**
   * Gets the value of the Terms field.
   * The terms that qualify this clause
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDTerm[] getTerms() {
    return (entity.APDTerm[])__getInternalInterface().getFieldValue(TERMS_PROP.get());
  }
  
  /**
   * Gets the value of the UpdateTime field.
   * Timestamp when the object was last updated
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getUpdateTime() {
    return (java.util.Date)__getInternalInterface().getFieldValue(UPDATETIME_PROP.get());
  }
  
  /**
   * Gets the value of the UpdateUser field.
   * User who last updated the object
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.User getUpdateUser() {
    return (entity.User)__getInternalInterface().getFieldValue(UPDATEUSER_PROP.get());
  }
  
  /**
   * 
   * @return true if this bean is to be inserted into the database when the bundle is committed.
   */
  public boolean isNew() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).isNew();
  }
  
  /**
   * 
   * @return True if the object was created by importation from an external system,
   *         False if it was created internally. Note that this refers to the currently
   *         instantiated object, not the data it represents
   */
  public boolean isNewlyImported() {
    return ((com.guidewire.commons.entity.Sourceable)__getDelegateManager().getImplementation("com.guidewire.commons.entity.Sourceable")).isNewlyImported();
  }
  
  /**
   * 
   * @return True if the object has been retired from active use, false if the
   *         object is active.  Retireable objects are never deleted from a
   *         database table, instead they are retired by setting the retired
   *         column to the same value as the ID of the object.
   */
  public java.lang.Boolean isRetired() {
    return ((com.guidewire.pl.domain.persistence.core.RetireablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.RetireablePublicMethods")).isRetired();
  }
  
  /**
   * Refreshes this bean with the latest database version.
   * <p/>
   * This method does nothing if the bean is edited or inserted in its current bundle. If the bean
   * no longer exists in the database, then <tt>null</tt> is returned. If the bean has been
   * evicted from its bundle, then <tt>null</tt> is returned. Otherwise, this bean is returned, with its contents
   * updated.
   */
  public entity.KeyableBean refresh() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).refresh();
  }
  
  /**
   * Marks this bean for remove. A bean marked for remove will be deleted or retired when the transaction
   * is committed. Once a bean is marked for remove, it cannot be switched to update, edit, or read.
   * <p>
   * WARNING: This method is designed for simple custom entities which are normally not
   * associated with other entities. Undesirable results may occur when used on out-of-box entities.
   */
  public void remove() {
    ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).remove();
  }
  
  /**
   * Removes the given element from the Rules array. This is achieved by marking the element for removal.
   */
  public void removeFromRules(entity.APDClauseRule element) {
    __getInternalInterface().removeArrayElement(RULES_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the Rules array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromRules(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(RULES_PROP.get(), elementID);
  }
  
  /**
   * Removes the given element from the Terms array. This is achieved by marking the element for removal.
   */
  public void removeFromTerms(entity.APDTerm element) {
    __getInternalInterface().removeArrayElement(TERMS_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the Terms array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromTerms(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(TERMS_PROP.get(), elementID);
  }
  
  /**
   * Sets the value of the BeanVersion field.
   */
  private void setBeanVersion(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(BEANVERSION_PROP.get(), value);
  }
  
  /**
   * Set the category for this clause.
   * Also sets the same category on all defined descendants of this clause.
   * @param category to be set as the category for this clause and all its descendants
   */
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  public void setClauseCategory(entity.APDClauseCategory category) {
    ((com.guidewire.pc.domain.apd.APDClausePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.apd.APDClausePublicMethods")).setClauseCategory(category);
  }
  
  /**
   * Sets the value of the CodeIdentifier field.
   */
  public void setCodeIdentifier(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(CODEIDENTIFIER_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Coverable field.
   */
  public void setCoverable(entity.APDCoverable value) {
    __getInternalInterface().setFieldValue(COVERABLE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the CreateTime field.
   */
  private void setCreateTime(java.util.Date value) {
    __getInternalInterface().setFieldValue(CREATETIME_PROP.get(), value);
  }
  
  /**
   * Sets the value of the CreateUser field.
   */
  private void setCreateUser(entity.User value) {
    __getInternalInterface().setFieldValue(CREATEUSER_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Description field.
   */
  public void setDescription(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(DESCRIPTION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Description_L10N_ARRAY field.
   */
  private void setDescription_L10N_ARRAY(entity.APDClause_Description_L10N[] value) {
    __getInternalInterface().setFieldValue(DESCRIPTION_L10N_ARRAY_PROP.get(), value);
  }
  
  /**
   * Array association mutator for key Description_ on array Description_L10N_ARRAY
   */
  public void setDescription_en_US(java.lang.String value) {
    __getInternalInterface().setLocalizedFieldValueForCodeGen((com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo)TYPE.get().getTypeInfo().getProperty("Description_en_US"), value);
  }
  
  /**
   * Sets the value of the ID field.
   */
  private void setID(gw.pl.persistence.core.Key value) {
    __getInternalInterface().setFieldValue(ID_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Name field.
   */
  public void setName(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(NAME_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Name_L10N_ARRAY field.
   */
  private void setName_L10N_ARRAY(entity.APDClause_Name_L10N[] value) {
    __getInternalInterface().setFieldValue(NAME_L10N_ARRAY_PROP.get(), value);
  }
  
  /**
   * Array association mutator for key Name_ on array Name_L10N_ARRAY
   */
  public void setName_en_US(java.lang.String value) {
    __getInternalInterface().setLocalizedFieldValueForCodeGen((com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo)TYPE.get().getTypeInfo().getProperty("Name_en_US"), value);
  }
  
  /**
   * Set a flag denoting that the currently instantiated object has been newly imported from
   * an external source
   * @param newlyImported 
   */
  public void setNewlyImported(boolean newlyImported) {
    ((com.guidewire.commons.entity.Sourceable)__getDelegateManager().getImplementation("com.guidewire.commons.entity.Sourceable")).setNewlyImported(newlyImported);
  }
  
  /**
   * Sets the value of the ParentClause field.
   */
  public void setParentClause(entity.APDClause value) {
    __getInternalInterface().setFieldValue(PARENTCLAUSE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ParentclauseedgeArray field.
   */
  private void setParentclauseedgeArray(entity.Parentclauseedge[] value) {
    __getInternalInterface().setFieldValue(PARENTCLAUSEEDGEARRAY_PROP.get(), value);
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  public void setPublicID(java.lang.String id) {
    ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).setPublicID(id);
  }
  
  /**
   * Sets the value of the RetiredValue field.
   */
  private void setRetiredValue(java.lang.Long value) {
    __getInternalInterface().setFieldValue(RETIREDVALUE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Rules field.
   */
  public void setRules(entity.APDClauseRule[] value) {
    __getInternalInterface().setFieldValue(RULES_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ScheduledItem field.
   */
  public void setScheduledItem(entity.APDScheduledItem value) {
    __getInternalInterface().setFieldValue(SCHEDULEDITEM_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Sequence field.
   */
  public void setSequence(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(SEQUENCE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Subtype field.
   */
  private void setSubtype(typekey.APDClause value) {
    __getInternalInterface().setFieldValue(SUBTYPE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Terms field.
   */
  public void setTerms(entity.APDTerm[] value) {
    __getInternalInterface().setFieldValue(TERMS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the UpdateTime field.
   */
  private void setUpdateTime(java.util.Date value) {
    __getInternalInterface().setFieldValue(UPDATETIME_PROP.get(), value);
  }
  
  /**
   * Sets the value of the UpdateUser field.
   */
  private void setUpdateUser(entity.User value) {
    __getInternalInterface().setFieldValue(UPDATEUSER_PROP.get(), value);
  }
  
  /**
   * Set's the version of the bean to the next value (i.e. the bean version original value+1)
   * Multiple calls to this method on the same bean will result in the same value being used
   * for the version (i.e. it is idempotent).
   * 
   * Calling this method will force the bean to be written to the database and participate fully
   * in the commit cycle e.g. pre-update rules will be run, etc.
   */
  public void touch() {
    ((com.guidewire.pl.domain.persistence.core.VersionablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods")).touch();
  }
  
  static {
    com.guidewire._generated.entity.APDClauseInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.EntityFriendAccess<entity.APDClause, com.guidewire._generated.entity.APDClauseInternal>() {
      public java.lang.Object getImplementation(entity.APDClause bean, java.lang.String interfaceName) {
        return bean.__getDelegateManager().getImplementation(interfaceName);
      }
      
      public com.guidewire._generated.entity.APDClauseInternal getInternalInterface(entity.APDClause bean) {
        if(bean == null) {
          return null;
        };
        return bean.__getInternalInterface();
      }
      
      
    });
  }
}
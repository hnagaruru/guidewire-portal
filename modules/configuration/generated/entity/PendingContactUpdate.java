package entity;

/**
 * PendingContactUpdate
 * A pending update to an entity.Contact.
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PendingContactUpdate.eti;PendingContactUpdate.eix;PendingContactUpdate.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
@gw.entity.EntityName(value = "PendingContactUpdate")
public class PendingContactUpdate extends com.guidewire.pl.persistence.code.BeanBase implements entity.Editable, entity.PendingUpdateDelegate, entity.Extractable, entity.FrozenSetMember, gw.api.domain.account.PendingUpdate {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.PendingContactUpdate> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.PendingContactUpdate>("entity.PendingContactUpdate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ARCHIVEPARTITION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ArchivePartition");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> BEANVERSION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "BeanVersion");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> COMPANYNAME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CompanyName");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> COMPANYNAMEISNULL_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CompanyNameIsNull");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> COMPANYNAMEKANJI_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CompanyNameKanji");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> COMPANYNAMEKANJIISNULL_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CompanyNameKanjiIsNull");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CREATETIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CreateTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> CREATEUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "CreateUser");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> DATEOFBIRTH_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "DateOfBirth");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> DATEOFBIRTHISNULL_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "DateOfBirthIsNull");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> FIRSTNAME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "FirstName");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> FIRSTNAMEISNULL_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "FirstNameIsNull");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> FIRSTNAMEKANJI_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "FirstNameKanji");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> FIRSTNAMEKANJIISNULL_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "FirstNameKanjiIsNull");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> FROZENSET_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "FrozenSet");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> JOB_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "Job");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> LASTNAME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "LastName");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> LASTNAMEISNULL_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "LastNameIsNull");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> LASTNAMEKANJI_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "LastNameKanji");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> LASTNAMEKANJIISNULL_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "LastNameKanjiIsNull");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> LICENSENUMBER_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "LicenseNumber");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> LICENSENUMBERISNULL_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "LicenseNumberIsNull");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> LICENSESTATE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "LicenseState");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> LICENSESTATEISNULL_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "LicenseStateIsNull");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> MARITALSTATUS_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "MaritalStatus");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> MARITALSTATUSISNULL_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "MaritalStatusIsNull");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PARTICLE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Particle");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PARTICLEISNULL_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ParticleIsNull");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PENDINGUPDATETIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PendingUpdateTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PUBLICID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PublicID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> TARGETCONTACT_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "TargetContact");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> UPDATETIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "UpdateTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> UPDATEUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "UpdateUser");
  
  private com.guidewire.pl.persistence.code.DelegateLoader _delegateManager;
  
  private com.guidewire._generated.entity.PendingContactUpdateInternal _internal;
  
  private static final com.guidewire.pl.persistence.code.DelegateMap DELEGATE_MAP;
  
  /**
   * Constructs a new instance of this entity in the {@link gw.transaction.Transaction#getCurrent() current} bundle.
   * @throws java.lang.NullPointerException if there is no current bundle defined
   */
  public PendingContactUpdate()  {
    this(gw.transaction.Transaction.getCurrent());
  }
  
  /**
   * Constructs a new instance of this entity in the bundle supplied by the given bundle provider.
   */
  public PendingContactUpdate(gw.pl.persistence.core.BundleProvider bundleProvider)  {
    this((java.lang.Void)null);
    com.guidewire.pl.system.entity.proxy.BeanProxy.initNewBeanInstance(this, bundleProvider.getBundle(), java.util.Arrays.asList());
  }
  
  protected PendingContactUpdate(java.lang.Void ignored)  {
    
  }
  
  protected com.guidewire._generated.entity.PendingContactUpdateInternal __createInternalInterface() {
    return new _Internal();
  }
  
  protected final com.guidewire.pl.persistence.code.DelegateLoader __getDelegateManager() {
    if(_delegateManager == null) {
      _delegateManager  =  com.guidewire.pl.persistence.code.DelegateLoader.newInstance(this, __getDelegateMap());
    };
    return _delegateManager;
  }
  
  protected com.guidewire.pl.persistence.code.DelegateMap __getDelegateMap() {
    return DELEGATE_MAP;
  }
  
  protected com.guidewire._generated.entity.PendingContactUpdateInternal __getInternalInterface() {
    if(_internal == null) {
      _internal  =  __createInternalInterface();
    };
    return _internal;
  }
  
  public void applyUpdate() {
    ((gw.api.domain.account.PendingUpdate)__getDelegateManager().getImplementation("gw.api.domain.account.PendingUpdate")).applyUpdate();
  }
  
  /**
   * 
   * @return A copy of the current bean and a deep copy of all owned array elements
   */
  public entity.KeyableBean copy() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).copy();
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getArchivePartition() {
    return (java.lang.Long)__getInternalInterface().getFieldValue(ARCHIVEPARTITION_PROP.get());
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getBeanVersion() {
    return ((com.guidewire.pl.domain.persistence.core.VersionablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods")).getBeanVersion();
  }
  
  /**
   * Gets the value of the CompanyName field.
   * The role's name, if it is a company, null otherwise.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCompanyName() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(COMPANYNAME_PROP.get());
  }
  
  /**
   * Gets the value of the CompanyNameKanji field.
   * The role's kanji name, if it is a company, null otherwise.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCompanyNameKanji() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(COMPANYNAMEKANJI_PROP.get());
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
   * Gets the value of the DateOfBirth field.
   * Date of birth.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getDateOfBirth() {
    return (java.util.Date)__getInternalInterface().getFieldValue(DATEOFBIRTH_PROP.get());
  }
  
  public java.util.Date getExecuteTime() {
    return ((gw.api.domain.account.PendingUpdate)__getDelegateManager().getImplementation("gw.api.domain.account.PendingUpdate")).getExecuteTime();
  }
  
  /**
   * Gets the value of the FirstName field.
   * The role's first name, if it is a person, null otherwise.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getFirstName() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(FIRSTNAME_PROP.get());
  }
  
  /**
   * Gets the value of the FirstNameKanji field.
   * The role's first name kanji, if it is a person, null otherwise.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getFirstNameKanji() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(FIRSTNAMEKANJI_PROP.get());
  }
  
  /**
   * Gets the value of the FrozenSet field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.FrozenSet getFrozenSet() {
    return (entity.FrozenSet)__getInternalInterface().getFieldValue(FROZENSET_PROP.get());
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.persistence.core.Key getID() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getID();
  }
  
  /**
   * Gets the value of the Job field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Job getJob() {
    return (entity.Job)__getInternalInterface().getFieldValue(JOB_PROP.get());
  }
  
  /**
   * Gets the value of the LastName field.
   * The role's last name, if it is a person, null otherwise.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getLastName() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(LASTNAME_PROP.get());
  }
  
  /**
   * Gets the value of the LastNameKanji field.
   * The role's last name kanji, if it is a person, null otherwise.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getLastNameKanji() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(LASTNAMEKANJI_PROP.get());
  }
  
  /**
   * Gets the value of the LicenseNumber field.
   * Driver's license number.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getLicenseNumber() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(LICENSENUMBER_PROP.get());
  }
  
  /**
   * Gets the value of the LicenseState field.
   * Driver's license state.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Jurisdiction getLicenseState() {
    return (typekey.Jurisdiction)__getInternalInterface().getFieldValue(LICENSESTATE_PROP.get());
  }
  
  /**
   * Gets the value of the MaritalStatus field.
   * Marital status.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.MaritalStatus getMaritalStatus() {
    return (typekey.MaritalStatus)__getInternalInterface().getFieldValue(MARITALSTATUS_PROP.get());
  }
  
  /**
   * Gets the value of the Particle field.
   * Particle for (French) name
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getParticle() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(PARTICLE_PROP.get());
  }
  
  /**
   * Gets the value of the PendingUpdateTime field.
   * The time when this pending update should be applied to the target entity.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getPendingUpdateTime() {
    return (java.util.Date)__getInternalInterface().getFieldValue(PENDINGUPDATETIME_PROP.get());
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPublicID() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getPublicID();
  }
  
  public entity.KeyableBean getTarget() {
    return ((gw.api.domain.account.PendingUpdate)__getDelegateManager().getImplementation("gw.api.domain.account.PendingUpdate")).getTarget();
  }
  
  /**
   * Gets the value of the TargetContact field.
   * The contact to write these values to.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Contact getTargetContact() {
    return (entity.Contact)__getInternalInterface().getFieldValue(TARGETCONTACT_PROP.get());
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
   * Gets the value of the CompanyNameIsNull field.
   * True if the CompanyName should be overwritten with null.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isCompanyNameIsNull() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(COMPANYNAMEISNULL_PROP.get());
  }
  
  /**
   * Gets the value of the CompanyNameKanjiIsNull field.
   * True if the CompanyNameKanji should be overwritten with null.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isCompanyNameKanjiIsNull() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(COMPANYNAMEKANJIISNULL_PROP.get());
  }
  
  /**
   * Gets the value of the DateOfBirthIsNull field.
   * True if the DateOfBirth should be overwritten with null.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isDateOfBirthIsNull() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(DATEOFBIRTHISNULL_PROP.get());
  }
  
  /**
   * Gets the value of the FirstNameIsNull field.
   * True if the FirstName should be overwritten with null.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isFirstNameIsNull() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(FIRSTNAMEISNULL_PROP.get());
  }
  
  /**
   * Gets the value of the FirstNameKanjiIsNull field.
   * True if the FirstNameKanji should be overwritten with null.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isFirstNameKanjiIsNull() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(FIRSTNAMEKANJIISNULL_PROP.get());
  }
  
  public boolean isFrozen() {
    return ((com.guidewire.pl.persistence.frozenset.FrozenSetMemberPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.persistence.frozenset.FrozenSetMemberPublicMethods")).isFrozen();
  }
  
  /**
   * Gets the value of the LastNameIsNull field.
   * True if the LastName should be overwritten with null.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isLastNameIsNull() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(LASTNAMEISNULL_PROP.get());
  }
  
  /**
   * Gets the value of the LastNameKanjiIsNull field.
   * True if the LastNameKanji should be overwritten with null.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isLastNameKanjiIsNull() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(LASTNAMEKANJIISNULL_PROP.get());
  }
  
  /**
   * Gets the value of the LicenseNumberIsNull field.
   * True if the LicenseNumber should be overwritten with null.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isLicenseNumberIsNull() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(LICENSENUMBERISNULL_PROP.get());
  }
  
  /**
   * Gets the value of the LicenseStateIsNull field.
   * True if the LicenseState should be overwritten with null.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isLicenseStateIsNull() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(LICENSESTATEISNULL_PROP.get());
  }
  
  /**
   * Gets the value of the MaritalStatusIsNull field.
   * True if the MaritalStatus should be overwritten with null.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isMaritalStatusIsNull() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(MARITALSTATUSISNULL_PROP.get());
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
   * Gets the value of the ParticleIsNull field.
   * True if the Particle should be overwritten with null.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isParticleIsNull() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(PARTICLEISNULL_PROP.get());
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
   * Sets the value of the ArchivePartition field.
   */
  private void setArchivePartition(java.lang.Long value) {
    __getInternalInterface().setFieldValue(ARCHIVEPARTITION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the BeanVersion field.
   */
  private void setBeanVersion(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(BEANVERSION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the CompanyName field.
   */
  public void setCompanyName(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(COMPANYNAME_PROP.get(), value);
  }
  
  /**
   * Sets the value of the CompanyNameIsNull field.
   */
  public void setCompanyNameIsNull(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(COMPANYNAMEISNULL_PROP.get(), value);
  }
  
  /**
   * Sets the value of the CompanyNameKanji field.
   */
  public void setCompanyNameKanji(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(COMPANYNAMEKANJI_PROP.get(), value);
  }
  
  /**
   * Sets the value of the CompanyNameKanjiIsNull field.
   */
  public void setCompanyNameKanjiIsNull(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(COMPANYNAMEKANJIISNULL_PROP.get(), value);
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
   * Sets the value of the DateOfBirth field.
   */
  public void setDateOfBirth(java.util.Date value) {
    __getInternalInterface().setFieldValue(DATEOFBIRTH_PROP.get(), value);
  }
  
  /**
   * Sets the value of the DateOfBirthIsNull field.
   */
  public void setDateOfBirthIsNull(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(DATEOFBIRTHISNULL_PROP.get(), value);
  }
  
  /**
   * Sets the value of the FirstName field.
   */
  public void setFirstName(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(FIRSTNAME_PROP.get(), value);
  }
  
  /**
   * Sets the value of the FirstNameIsNull field.
   */
  public void setFirstNameIsNull(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(FIRSTNAMEISNULL_PROP.get(), value);
  }
  
  /**
   * Sets the value of the FirstNameKanji field.
   */
  public void setFirstNameKanji(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(FIRSTNAMEKANJI_PROP.get(), value);
  }
  
  /**
   * Sets the value of the FirstNameKanjiIsNull field.
   */
  public void setFirstNameKanjiIsNull(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(FIRSTNAMEKANJIISNULL_PROP.get(), value);
  }
  
  /**
   * Sets the value of the FrozenSet field.
   */
  public void setFrozenSet(entity.FrozenSet value) {
    __getInternalInterface().setFieldValue(FROZENSET_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ID field.
   */
  private void setID(gw.pl.persistence.core.Key value) {
    __getInternalInterface().setFieldValue(ID_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Job field.
   */
  public void setJob(entity.Job value) {
    __getInternalInterface().setFieldValue(JOB_PROP.get(), value);
  }
  
  /**
   * Sets the value of the LastName field.
   */
  public void setLastName(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(LASTNAME_PROP.get(), value);
  }
  
  /**
   * Sets the value of the LastNameIsNull field.
   */
  public void setLastNameIsNull(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(LASTNAMEISNULL_PROP.get(), value);
  }
  
  /**
   * Sets the value of the LastNameKanji field.
   */
  public void setLastNameKanji(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(LASTNAMEKANJI_PROP.get(), value);
  }
  
  /**
   * Sets the value of the LastNameKanjiIsNull field.
   */
  public void setLastNameKanjiIsNull(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(LASTNAMEKANJIISNULL_PROP.get(), value);
  }
  
  /**
   * Sets the value of the LicenseNumber field.
   */
  public void setLicenseNumber(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(LICENSENUMBER_PROP.get(), value);
  }
  
  /**
   * Sets the value of the LicenseNumberIsNull field.
   */
  public void setLicenseNumberIsNull(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(LICENSENUMBERISNULL_PROP.get(), value);
  }
  
  /**
   * Sets the value of the LicenseState field.
   */
  public void setLicenseState(typekey.Jurisdiction value) {
    __getInternalInterface().setFieldValue(LICENSESTATE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the LicenseStateIsNull field.
   */
  public void setLicenseStateIsNull(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(LICENSESTATEISNULL_PROP.get(), value);
  }
  
  /**
   * Sets the value of the MaritalStatus field.
   */
  public void setMaritalStatus(typekey.MaritalStatus value) {
    __getInternalInterface().setFieldValue(MARITALSTATUS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the MaritalStatusIsNull field.
   */
  public void setMaritalStatusIsNull(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(MARITALSTATUSISNULL_PROP.get(), value);
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
   * Sets the value of the Particle field.
   */
  public void setParticle(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(PARTICLE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ParticleIsNull field.
   */
  public void setParticleIsNull(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(PARTICLEISNULL_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PendingUpdateTime field.
   */
  public void setPendingUpdateTime(java.util.Date value) {
    __getInternalInterface().setFieldValue(PENDINGUPDATETIME_PROP.get(), value);
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  public void setPublicID(java.lang.String id) {
    ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).setPublicID(id);
  }
  
  /**
   * Sets the value of the TargetContact field.
   */
  public void setTargetContact(entity.Contact value) {
    __getInternalInterface().setFieldValue(TARGETCONTACT_PROP.get(), value);
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
  
  private class _Internal extends com.guidewire.pl.persistence.code.BeanInternalBase implements com.guidewire._generated.entity.PendingContactUpdateInternal {
    protected com.guidewire.pl.persistence.code.DelegateLoader __getDelegateManager() {
      return entity.PendingContactUpdate.this.__getDelegateManager();
    }
    
    public boolean alwaysReserveID() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).alwaysReserveID();
    }
    
    public void applyUpdate() {
      ((gw.api.domain.account.PendingUpdate)__getDelegateManager().getImplementation("gw.api.domain.account.PendingUpdate")).applyUpdate();
    }
    
    public void assignPermanentId(gw.pl.persistence.core.Key id) {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).assignPermanentId(id);
    }
    
    public java.lang.Integer calculateNextVersion() {
      return ((com.guidewire.pl.domain.persistence.core.impl.VersionableInternal)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.VersionableInternal")).calculateNextVersion();
    }
    
    public java.util.List<entity.KeyableBean> cascadeDelete() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).cascadeDelete();
    }
    
    public entity.KeyableBean cloneBeanForBundleTransfer() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).cloneBeanForBundleTransfer();
    }
    
    /**
     * 
     * @return A copy of the current bean and a deep copy of all owned array elements
     */
    public entity.KeyableBean copy() {
      return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).copy();
    }
    
    public entity.KeyableBean downcast(gw.entity.IEntityType newSubtype) {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).downcast(newSubtype);
    }
    
    public java.util.List<com.guidewire.pl.system.integration.messaging.events.EventDescriptor> generateInsertEventsInternal() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).generateInsertEventsInternal();
    }
    
    public java.util.List<com.guidewire.pl.system.integration.messaging.events.EventDescriptor> generateRemoveEventsInternal() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).generateRemoveEventsInternal();
    }
    
    public java.util.List<com.guidewire.pl.system.integration.messaging.events.EventDescriptor> generateUpdateEventsInternal() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).generateUpdateEventsInternal();
    }
    
    /**
     * Gets the value of the ArchivePartition field.
     * Unique number to partition the data so that the multiple workers can work independently
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Long getArchivePartition() {
      return (java.lang.Long)__getInternalInterface().getFieldValue(ARCHIVEPARTITION_PROP.get());
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getBeanVersion() {
      return ((com.guidewire.pl.domain.persistence.core.VersionablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods")).getBeanVersion();
    }
    
    /**
     * Gets the value of the CompanyName field.
     * The role's name, if it is a company, null otherwise.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getCompanyName() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(COMPANYNAME_PROP.get());
    }
    
    /**
     * Gets the value of the CompanyNameKanji field.
     * The role's kanji name, if it is a company, null otherwise.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getCompanyNameKanji() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(COMPANYNAMEKANJI_PROP.get());
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
    
    public gw.pl.persistence.core.Key getCreateUserID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(CREATEUSER_PROP.get());
    }
    
    /**
     * Gets the value of the DateOfBirth field.
     * Date of birth.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getDateOfBirth() {
      return (java.util.Date)__getInternalInterface().getFieldValue(DATEOFBIRTH_PROP.get());
    }
    
    public java.util.Date getExecuteTime() {
      return ((gw.api.domain.account.PendingUpdate)__getDelegateManager().getImplementation("gw.api.domain.account.PendingUpdate")).getExecuteTime();
    }
    
    /**
     * Gets the value of the FirstName field.
     * The role's first name, if it is a person, null otherwise.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getFirstName() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(FIRSTNAME_PROP.get());
    }
    
    /**
     * Gets the value of the FirstNameKanji field.
     * The role's first name kanji, if it is a person, null otherwise.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getFirstNameKanji() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(FIRSTNAMEKANJI_PROP.get());
    }
    
    /**
     * Gets the value of the FrozenSet field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.FrozenSet getFrozenSet() {
      return (entity.FrozenSet)__getInternalInterface().getFieldValue(FROZENSET_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getFrozenSetID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(FROZENSET_PROP.get());
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public gw.pl.persistence.core.Key getID() {
      return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getID();
    }
    
    public gw.pl.persistence.core.Key getIdToSetForForeignKey(gw.entity.ILinkPropertyInfo link) {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).getIdToSetForForeignKey(link);
    }
    
    /**
     * Gets the value of the Job field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.Job getJob() {
      return (entity.Job)__getInternalInterface().getFieldValue(JOB_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getJobID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(JOB_PROP.get());
    }
    
    /**
     * Gets the value of the LastName field.
     * The role's last name, if it is a person, null otherwise.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getLastName() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(LASTNAME_PROP.get());
    }
    
    /**
     * Gets the value of the LastNameKanji field.
     * The role's last name kanji, if it is a person, null otherwise.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getLastNameKanji() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(LASTNAMEKANJI_PROP.get());
    }
    
    /**
     * Gets the value of the LicenseNumber field.
     * Driver's license number.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getLicenseNumber() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(LICENSENUMBER_PROP.get());
    }
    
    /**
     * Gets the value of the LicenseState field.
     * Driver's license state.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.Jurisdiction getLicenseState() {
      return (typekey.Jurisdiction)__getInternalInterface().getFieldValue(LICENSESTATE_PROP.get());
    }
    
    /**
     * Gets the value of the MaritalStatus field.
     * Marital status.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.MaritalStatus getMaritalStatus() {
      return (typekey.MaritalStatus)__getInternalInterface().getFieldValue(MARITALSTATUS_PROP.get());
    }
    
    /**
     * Gets the value of the Particle field.
     * Particle for (French) name
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getParticle() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(PARTICLE_PROP.get());
    }
    
    /**
     * Gets the value of the PendingUpdateTime field.
     * The time when this pending update should be applied to the target entity.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getPendingUpdateTime() {
      return (java.util.Date)__getInternalInterface().getFieldValue(PENDINGUPDATETIME_PROP.get());
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getPublicID() {
      return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getPublicID();
    }
    
    public entity.KeyableBean getTarget() {
      return ((gw.api.domain.account.PendingUpdate)__getDelegateManager().getImplementation("gw.api.domain.account.PendingUpdate")).getTarget();
    }
    
    /**
     * Gets the value of the TargetContact field.
     * The contact to write these values to.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.Contact getTargetContact() {
      return (entity.Contact)__getInternalInterface().getFieldValue(TARGETCONTACT_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getTargetContactID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(TARGETCONTACT_PROP.get());
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
    
    public gw.pl.persistence.core.Key getUpdateUserID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(UPDATEUSER_PROP.get());
    }
    
    public void initInBundle(gw.pl.persistence.core.Key id, gw.pl.persistence.core.Bundle bundle) {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).initInBundle(id, bundle);
    }
    
    /**
     * Gets the value of the CompanyNameIsNull field.
     * True if the CompanyName should be overwritten with null.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isCompanyNameIsNull() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(COMPANYNAMEISNULL_PROP.get());
    }
    
    /**
     * Gets the value of the CompanyNameKanjiIsNull field.
     * True if the CompanyNameKanji should be overwritten with null.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isCompanyNameKanjiIsNull() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(COMPANYNAMEKANJIISNULL_PROP.get());
    }
    
    /**
     * Gets the value of the DateOfBirthIsNull field.
     * True if the DateOfBirth should be overwritten with null.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isDateOfBirthIsNull() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(DATEOFBIRTHISNULL_PROP.get());
    }
    
    /**
     * Gets the value of the FirstNameIsNull field.
     * True if the FirstName should be overwritten with null.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isFirstNameIsNull() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(FIRSTNAMEISNULL_PROP.get());
    }
    
    /**
     * Gets the value of the FirstNameKanjiIsNull field.
     * True if the FirstNameKanji should be overwritten with null.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isFirstNameKanjiIsNull() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(FIRSTNAMEKANJIISNULL_PROP.get());
    }
    
    public boolean isFrozen() {
      return ((com.guidewire.pl.persistence.frozenset.FrozenSetMemberPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.persistence.frozenset.FrozenSetMemberPublicMethods")).isFrozen();
    }
    
    /**
     * Gets the value of the LastNameIsNull field.
     * True if the LastName should be overwritten with null.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isLastNameIsNull() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(LASTNAMEISNULL_PROP.get());
    }
    
    /**
     * Gets the value of the LastNameKanjiIsNull field.
     * True if the LastNameKanji should be overwritten with null.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isLastNameKanjiIsNull() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(LASTNAMEKANJIISNULL_PROP.get());
    }
    
    /**
     * Gets the value of the LicenseNumberIsNull field.
     * True if the LicenseNumber should be overwritten with null.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isLicenseNumberIsNull() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(LICENSENUMBERISNULL_PROP.get());
    }
    
    /**
     * Gets the value of the LicenseStateIsNull field.
     * True if the LicenseState should be overwritten with null.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isLicenseStateIsNull() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(LICENSESTATEISNULL_PROP.get());
    }
    
    /**
     * Gets the value of the MaritalStatusIsNull field.
     * True if the MaritalStatus should be overwritten with null.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isMaritalStatusIsNull() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(MARITALSTATUSISNULL_PROP.get());
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
     * Gets the value of the ParticleIsNull field.
     * True if the Particle should be overwritten with null.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isParticleIsNull() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(PARTICLEISNULL_PROP.get());
    }
    
    public boolean isTemporary() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).isTemporary();
    }
    
    public entity.KeyableBean overrideBundleAdd(gw.pl.persistence.core.Bundle bundle) {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).overrideBundleAdd(bundle);
    }
    
    public entity.KeyableBean overrideBundleRemove(gw.pl.persistence.core.Bundle bundle) {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).overrideBundleRemove(bundle);
    }
    
    public void putInBundle() {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).putInBundle();
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
    
    public entity.KeyableBean reload(gw.pl.persistence.core.Bundle bundle) {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).reload(bundle);
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
    
    public void removed() {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).removed();
    }
    
    /**
     * Sets the value of the ArchivePartition field.
     */
    public void setArchivePartition(java.lang.Long value) {
      __getInternalInterface().setFieldValue(ARCHIVEPARTITION_PROP.get(), value);
    }
    
    /**
     * Sets the value of the BeanVersion field.
     */
    public void setBeanVersion(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(BEANVERSION_PROP.get(), value);
    }
    
    /**
     * Sets the value of the CompanyName field.
     */
    public void setCompanyName(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(COMPANYNAME_PROP.get(), value);
    }
    
    /**
     * Sets the value of the CompanyNameIsNull field.
     */
    public void setCompanyNameIsNull(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(COMPANYNAMEISNULL_PROP.get(), value);
    }
    
    /**
     * Sets the value of the CompanyNameKanji field.
     */
    public void setCompanyNameKanji(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(COMPANYNAMEKANJI_PROP.get(), value);
    }
    
    /**
     * Sets the value of the CompanyNameKanjiIsNull field.
     */
    public void setCompanyNameKanjiIsNull(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(COMPANYNAMEKANJIISNULL_PROP.get(), value);
    }
    
    /**
     * Sets the value of the CreateTime field.
     */
    public void setCreateTime(java.util.Date value) {
      __getInternalInterface().setFieldValue(CREATETIME_PROP.get(), value);
    }
    
    /**
     * Sets the value of the CreateUser field.
     */
    public void setCreateUser(entity.User value) {
      __getInternalInterface().setFieldValue(CREATEUSER_PROP.get(), value);
    }
    
    public void setCreateUserID(gw.pl.persistence.core.Key value) {
      setFieldValue(CREATEUSER_PROP.get(), value);
    }
    
    /**
     * Sets the value of the DateOfBirth field.
     */
    public void setDateOfBirth(java.util.Date value) {
      __getInternalInterface().setFieldValue(DATEOFBIRTH_PROP.get(), value);
    }
    
    /**
     * Sets the value of the DateOfBirthIsNull field.
     */
    public void setDateOfBirthIsNull(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(DATEOFBIRTHISNULL_PROP.get(), value);
    }
    
    /**
     * Sets the value of the FirstName field.
     */
    public void setFirstName(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(FIRSTNAME_PROP.get(), value);
    }
    
    /**
     * Sets the value of the FirstNameIsNull field.
     */
    public void setFirstNameIsNull(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(FIRSTNAMEISNULL_PROP.get(), value);
    }
    
    /**
     * Sets the value of the FirstNameKanji field.
     */
    public void setFirstNameKanji(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(FIRSTNAMEKANJI_PROP.get(), value);
    }
    
    /**
     * Sets the value of the FirstNameKanjiIsNull field.
     */
    public void setFirstNameKanjiIsNull(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(FIRSTNAMEKANJIISNULL_PROP.get(), value);
    }
    
    /**
     * Sets the value of the FrozenSet field.
     */
    public void setFrozenSet(entity.FrozenSet value) {
      __getInternalInterface().setFieldValue(FROZENSET_PROP.get(), value);
    }
    
    public void setFrozenSetID(gw.pl.persistence.core.Key value) {
      setFieldValue(FROZENSET_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ID field.
     */
    public void setID(gw.pl.persistence.core.Key value) {
      __getInternalInterface().setFieldValue(ID_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Job field.
     */
    public void setJob(entity.Job value) {
      __getInternalInterface().setFieldValue(JOB_PROP.get(), value);
    }
    
    public void setJobID(gw.pl.persistence.core.Key value) {
      setFieldValue(JOB_PROP.get(), value);
    }
    
    /**
     * Sets the value of the LastName field.
     */
    public void setLastName(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(LASTNAME_PROP.get(), value);
    }
    
    /**
     * Sets the value of the LastNameIsNull field.
     */
    public void setLastNameIsNull(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(LASTNAMEISNULL_PROP.get(), value);
    }
    
    /**
     * Sets the value of the LastNameKanji field.
     */
    public void setLastNameKanji(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(LASTNAMEKANJI_PROP.get(), value);
    }
    
    /**
     * Sets the value of the LastNameKanjiIsNull field.
     */
    public void setLastNameKanjiIsNull(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(LASTNAMEKANJIISNULL_PROP.get(), value);
    }
    
    public void setLazyLoadedRow() {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).setLazyLoadedRow();
    }
    
    /**
     * Sets the value of the LicenseNumber field.
     */
    public void setLicenseNumber(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(LICENSENUMBER_PROP.get(), value);
    }
    
    /**
     * Sets the value of the LicenseNumberIsNull field.
     */
    public void setLicenseNumberIsNull(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(LICENSENUMBERISNULL_PROP.get(), value);
    }
    
    /**
     * Sets the value of the LicenseState field.
     */
    public void setLicenseState(typekey.Jurisdiction value) {
      __getInternalInterface().setFieldValue(LICENSESTATE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the LicenseStateIsNull field.
     */
    public void setLicenseStateIsNull(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(LICENSESTATEISNULL_PROP.get(), value);
    }
    
    /**
     * Sets the value of the MaritalStatus field.
     */
    public void setMaritalStatus(typekey.MaritalStatus value) {
      __getInternalInterface().setFieldValue(MARITALSTATUS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the MaritalStatusIsNull field.
     */
    public void setMaritalStatusIsNull(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(MARITALSTATUSISNULL_PROP.get(), value);
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
     * Sets the value of the Particle field.
     */
    public void setParticle(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(PARTICLE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ParticleIsNull field.
     */
    public void setParticleIsNull(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(PARTICLEISNULL_PROP.get(), value);
    }
    
    /**
     * Sets the value of the PendingUpdateTime field.
     */
    public void setPendingUpdateTime(java.util.Date value) {
      __getInternalInterface().setFieldValue(PENDINGUPDATETIME_PROP.get(), value);
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    public void setPublicID(java.lang.String id) {
      ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).setPublicID(id);
    }
    
    /**
     * Sets the value of the TargetContact field.
     */
    public void setTargetContact(entity.Contact value) {
      __getInternalInterface().setFieldValue(TARGETCONTACT_PROP.get(), value);
    }
    
    public void setTargetContactID(gw.pl.persistence.core.Key value) {
      setFieldValue(TARGETCONTACT_PROP.get(), value);
    }
    
    /**
     * Sets the value of the UpdateTime field.
     */
    public void setUpdateTime(java.util.Date value) {
      __getInternalInterface().setFieldValue(UPDATETIME_PROP.get(), value);
    }
    
    /**
     * Sets the value of the UpdateUser field.
     */
    public void setUpdateUser(entity.User value) {
      __getInternalInterface().setFieldValue(UPDATEUSER_PROP.get(), value);
    }
    
    public void setUpdateUserID(gw.pl.persistence.core.Key value) {
      setFieldValue(UPDATEUSER_PROP.get(), value);
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
    
    
  }
  
  static {
    java.util.HashMap<java.lang.String, java.lang.String> config = new java.util.HashMap<java.lang.String, java.lang.String>();
    config.put("com.guidewire.commons.entity.Keyable", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.commons.entity.Sourceable", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.BeanInternal", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods", "com.guidewire.pl.system.entity.proxy.AbstractKeyableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.VersionableInternal", "com.guidewire.pl.system.entity.proxy.AbstractEditableBeanProxy");
    config.put("com.guidewire.pl.persistence.core.BeanMethods", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("com.guidewire.pl.persistence.frozenset.FrozenSetMemberPublicMethods", "com.guidewire.pl.persistence.frozenset.FrozenSetMemberPublicMethodsImpl");
    config.put("gw.api.domain.account.PendingUpdate", "gw.account.PendingContactUpdateAdapter");
    config.put("gw.pl.persistence.core.Bean", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("gw.pl.persistence.core.BundleProvider", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("java.lang.Comparable", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    DELEGATE_MAP  =  com.guidewire.pl.persistence.code.DelegateMap.newInstance(entity.PendingContactUpdate.class, config);
    com.guidewire._generated.entity.PendingContactUpdateInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.InstantiableEntityFriendAccess<entity.PendingContactUpdate, com.guidewire._generated.entity.PendingContactUpdateInternal>() {
      public java.lang.Object getImplementation(entity.PendingContactUpdate bean, java.lang.String interfaceName) {
        return bean.__getDelegateManager().getImplementation(interfaceName);
      }
      
      public com.guidewire._generated.entity.PendingContactUpdateInternal getInternalInterface(entity.PendingContactUpdate bean) {
        if(bean == null) {
          return null;
        };
        return bean.__getInternalInterface();
      }
      
      public entity.PendingContactUpdate newEmptyInstance() {
        return new entity.PendingContactUpdate((java.lang.Void)null);
      }
      
      public void validateImplementations() {
        DELEGATE_MAP.validateImplementations();
      }
      
      
    });
  }
}
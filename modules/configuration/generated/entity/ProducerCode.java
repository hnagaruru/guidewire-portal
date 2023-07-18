package entity;

/**
 * ProducerCode
 * Identifies producer and underwriting assignment preferences.
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "ProducerCode.eti;ProducerCode.eix;ProducerCode.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
@gw.entity.EntityName(value = "ProducerCode")
public class ProducerCode extends com.guidewire.pl.persistence.code.BeanBase implements entity.Retireable, entity.Validatable, entity.EventAware {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.ProducerCode> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.ProducerCode>("entity.ProducerCode");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> ADDRESS_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "Address");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ADDRESSPUBLICID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "AddressPublicID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> AFFINITYGROUPPRODUCERCODES_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "AffinityGroupProducerCodes");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> APPOINTMENTDATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "AppointmentDate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> BEANVERSION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "BeanVersion");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> BRANCH_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "Branch");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CODE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Code");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CODEDENORM_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CodeDenorm");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> COMMISSIONPLANS_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "CommissionPlans");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CREATETIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CreateTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> CREATEUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "CreateUser");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> DESCRIPTION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Description");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> DESCRIPTIONDENORM_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "DescriptionDenorm");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> DESCRIPTION_L10N_ARRAY_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "Description_L10N_ARRAY");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> GROUPPRODUCERCODES_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "GroupProducerCodes");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> ORGANIZATION_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "Organization");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> PARENT_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "Parent");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> PREFERREDUNDERWRITER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "PreferredUnderwriter");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> PRODUCERCODEROLES_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "ProducerCodeRoles");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> PRODUCERSTATUS_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "ProducerStatus");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> PRODUCERCODECODEARRAY_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "ProducercodecodeArray");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PUBLICID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PublicID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> RETIREDVALUE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "RetiredValue");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> TERMINATIONDATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "TerminationDate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> UPDATETIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "UpdateTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> UPDATEUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "UpdateUser");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> USERPRODUCERCODES_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "UserProducerCodes");
  
  private com.guidewire.pl.persistence.code.DelegateLoader _delegateManager;
  
  private com.guidewire._generated.entity.ProducerCodeInternal _internal;
  
  private static final com.guidewire.pl.persistence.code.DelegateMap DELEGATE_MAP;
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> RETIRED_DYNPROP = com.guidewire.pl.domain.persistence.core.RetireablePublicMethods.RETIRED_DYNPROP;
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> VALIDATION_RESULTS_DYNPROP = com.guidewire.pl.domain.validation.ValidatablePublicMethods.VALIDATION_RESULTS_DYNPROP;
  
  public static final java.lang.String PRODUCERCODEADDED_EVENT = "ProducerCodeAdded";
  
  public static final java.lang.String PRODUCERCODECHANGED_EVENT = "ProducerCodeChanged";
  
  public static final java.lang.String PRODUCERCODEREMOVED_EVENT = "ProducerCodeRemoved";
  
  /**
   * Constructs a new instance of this entity in the {@link gw.transaction.Transaction#getCurrent() current} bundle.
   * @throws java.lang.NullPointerException if there is no current bundle defined
   */
  public ProducerCode()  {
    this(gw.transaction.Transaction.getCurrent());
  }
  
  /**
   * Constructs a new instance of this entity in the bundle supplied by the given bundle provider.
   */
  public ProducerCode(gw.pl.persistence.core.BundleProvider bundleProvider)  {
    this((java.lang.Void)null);
    com.guidewire.pl.system.entity.proxy.BeanProxy.initNewBeanInstance(this, bundleProvider.getBundle(), java.util.Arrays.asList());
  }
  
  protected ProducerCode(java.lang.Void ignored)  {
    
  }
  
  protected com.guidewire._generated.entity.ProducerCodeInternal __createInternalInterface() {
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
  
  protected com.guidewire._generated.entity.ProducerCodeInternal __getInternalInterface() {
    if(_internal == null) {
      _internal  =  __createInternalInterface();
    };
    return _internal;
  }
  
  /**
   * Creates a new CommissionPlan in the given Currency and adds it to this ProducerCode's CommissionPlans.
   * 
   * Callers should use findCommissionPlanByCurrency() to retrieve the added CommissionPlan.
   * 
   * This method will throw an exception if called with a Currency for which a CommissionPlan already exists (for this ProducerCode).
   * @param currency the Currency in which the CommissionPlan should be created.
   */
  public void addCommissionPlanForCurrency(typekey.Currency currency) {
    ((com.guidewire.pc.domain.product.ProducerCodePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.product.ProducerCodePublicMethods")).addCommissionPlanForCurrency(currency);
  }
  
  /**
   * Associates an event with the bean, which will be fired when the bean is
   * committed. A bean with an event is considered changed.
   * @param strEventId The event id.
   */
  public void addEvent(java.lang.String strEventId) {
    ((com.guidewire.pl.domain.messaging.EventAwarePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.messaging.EventAwarePublicMethods")).addEvent(strEventId);
  }
  
  /**
   * Adds <code>group</code> and all its ancestors to
   * the set of groups associated with this producer code.
   * For the purposes of this method, the set of ancestors
   * of a group is defined to include all ancestor Groups
   * in its immediate Group tree, plus all the root Groups
   * associated with (not necessarily proper) ancestor
   * Organizations of its nearest containing Organization.
   * @param group 
   * @return true if <code>group</code> was not previously associated with
   *         this producer code; false if this method was a no-op.
   */
  public boolean addGroup(entity.Group group) {
    return ((com.guidewire.pc.domain.product.ProducerCodePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.product.ProducerCodePublicMethods")).addGroup(group);
  }
  
  /**
   * Adds <code>role</code> to the set of roles associated with this producer code.
   * @param role 
   * @return the created ProducerCodeRole if <code>role</code> was not previously associated with
   *         this producer code; null if this method was a no-op.
   */
  public entity.ProducerCodeRole addRole(entity.Role role) {
    return ((com.guidewire.pc.domain.product.ProducerCodePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.product.ProducerCodePublicMethods")).addRole(role);
  }
  
  /**
   * Adds the given element to the AffinityGroupProducerCodes array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToAffinityGroupProducerCodes(entity.AffinityGroupProducerCode element) {
    __getInternalInterface().addArrayElement(AFFINITYGROUPPRODUCERCODES_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the CommissionPlans array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToCommissionPlans(entity.CommissionPlan element) {
    __getInternalInterface().addArrayElement(COMMISSIONPLANS_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the GroupProducerCodes array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToGroupProducerCodes(entity.GroupProducerCode element) {
    __getInternalInterface().addArrayElement(GROUPPRODUCERCODES_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the ProducerCodeRoles array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToProducerCodeRoles(entity.ProducerCodeRole element) {
    __getInternalInterface().addArrayElement(PRODUCERCODEROLES_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the UserProducerCodes array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToUserProducerCodes(entity.UserProducerCode element) {
    __getInternalInterface().addArrayElement(USERPRODUCERCODES_PROP.get(), element);
  }
  
  /**
   * Adds <code>user</code> to the set of users associated with this producer code by creating all
   * UserProducerCode rows with the available roles from all the ProducerCode's roles.
   * @param user 
   * @return the created UserProducerCode if <code>user</code> was not previously associated with
   *         this producer code; null if this method was a no-op.
   */
  public boolean addUser(entity.User user) {
    return ((com.guidewire.pc.domain.product.ProducerCodePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.product.ProducerCodePublicMethods")).addUser(user);
  }
  
  /**
   * Creates a new record for the UserProducerCode table with the appropriate Role.
   * @param user 
   * @param role 
   * @return The created User Producer Code Role
   */
  public entity.UserProducerCode addUserProducerCodeRole(entity.User user, entity.Role role) {
    return ((com.guidewire.pc.domain.product.ProducerCodePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.product.ProducerCodePublicMethods")).addUserProducerCodeRole(user, role);
  }
  
  /**
   * 
   * @return A copy of the current bean and a deep copy of all owned array elements
   */
  public entity.KeyableBean copy() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).copy();
  }
  
  /**
   * Finds the Commission Plan associated with this Producer Code for the given
   * Currency. This will return null if there is no Commission Plan for the specified currency.
   * @param currency the Currency to use when looking up the Commission Plan.
   * @return the Commission Plan with the specified currency, or null if no Commission Plan exists for this Producer Code and currency.
   */
  public entity.CommissionPlan findCommissionPlanByCurrency(typekey.Currency currency) {
    return ((com.guidewire.pc.domain.product.ProducerCodePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.product.ProducerCodePublicMethods")).findCommissionPlanByCurrency(currency);
  }
  
  /**
   * Gets the value of the Address field.
   * The contact for this producer code.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Address getAddress() {
    return (entity.Address)__getInternalInterface().getFieldValue(ADDRESS_PROP.get());
  }
  
  /**
   * Gets the value of the AddressPublicID field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getAddressPublicID() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ADDRESSPUBLICID_PROP.get());
  }
  
  /**
   * Gets the value of the AffinityGroupProducerCodes field.
   * Available groups to a producer code.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.AffinityGroupProducerCode[] getAffinityGroupProducerCodes() {
    return (entity.AffinityGroupProducerCode[])__getInternalInterface().getFieldValue(AFFINITYGROUPPRODUCERCODES_PROP.get());
  }
  
  /**
   * Returns the ProducerCode's Currencies
   * @return the Currencies as a set
   */
  public java.util.Set<typekey.Currency> getAllCurrencies() {
    return ((com.guidewire.pc.domain.product.ProducerCodePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.product.ProducerCodePublicMethods")).getAllCurrencies();
  }
  
  /**
   * Returns the ProducerCode's Groups
   * @return the Groups as a set
   */
  public java.util.Set getAllGroups() {
    return ((com.guidewire.pc.domain.product.ProducerCodePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.product.ProducerCodePublicMethods")).getAllGroups();
  }
  
  /**
   * Returns the ProducerCode's Users
   * @return the Users as an array
   */
  public entity.User[] getAllUsers() {
    return ((com.guidewire.pc.domain.product.ProducerCodePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.product.ProducerCodePublicMethods")).getAllUsers();
  }
  
  /**
   * Gets the value of the AppointmentDate field.
   * Indicates when the carrier's relationship with the producer began.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getAppointmentDate() {
    return (java.util.Date)__getInternalInterface().getFieldValue(APPOINTMENTDATE_PROP.get());
  }
  
  /**
   * Returns all Roles that apply to Producer Codes
   * i.e. of types ProducerCode and UserProducerCode
   * For producer codes that belong to -
   * internal orgs, returns all roles
   * external orgs, returns only external roles
   */
  public entity.Role[] getAvailableRoles() {
    return ((com.guidewire.pc.domain.product.ProducerCodePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.product.ProducerCodePublicMethods")).getAvailableRoles();
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getBeanVersion() {
    return ((com.guidewire.pl.domain.persistence.core.VersionablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods")).getBeanVersion();
  }
  
  /**
   * Gets the value of the Branch field.
   * The internal (carrier) branch that handles the business for this producer code.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Group getBranch() {
    return (entity.Group)__getInternalInterface().getFieldValue(BRANCH_PROP.get());
  }
  
  /**
   * Gets the value of the Code field.
   * The producer code.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCode() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(CODE_PROP.get());
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCodeDenorm() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(CODEDENORM_PROP.get());
  }
  
  /**
   * Returns the ProducerCode's commission plans IDs
   * @return the commission plan IDs as a set
   */
  public java.util.Set<java.lang.String> getCommissionPlanIDs() {
    return ((com.guidewire.pc.domain.product.ProducerCodePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.product.ProducerCodePublicMethods")).getCommissionPlanIDs();
  }
  
  /**
   * Gets the value of the CommissionPlans field.
   * Currencies allowed to be used by the producer code as billing currency.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.CommissionPlan[] getCommissionPlans() {
    return (entity.CommissionPlan[])__getInternalInterface().getFieldValue(COMMISSIONPLANS_PROP.get());
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
   * The producer code description.
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
  public java.lang.String getDescriptionDenorm() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(DESCRIPTIONDENORM_PROP.get());
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ProducerCode_Description_L10N[] getDescription_L10N_ARRAY() {
    return (entity.ProducerCode_Description_L10N[])__getInternalInterface().getFieldValue(DESCRIPTION_L10N_ARRAY_PROP.get());
  }
  
  /**
   * Array association accessor for key en_US on array Description_L10N_ARRAY
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getDescription_en_US() {
    return (java.lang.String)__getInternalInterface().getLocalizedFieldValueForCodeGen((com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo)TYPE.get().getTypeInfo().getProperty("Description_en_US"));
  }
  
  /**
   * Gets the value of the GroupProducerCodes field.
   * Available producer codes to an external producer group.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GroupProducerCode[] getGroupProducerCodes() {
    return (entity.GroupProducerCode[])__getInternalInterface().getFieldValue(GROUPPRODUCERCODES_PROP.get());
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.persistence.core.Key getID() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getID();
  }
  
  /**
   * Gets the value of the Organization field.
   * The Organization this producer code belongs to.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Organization getOrganization() {
    return (entity.Organization)__getInternalInterface().getFieldValue(ORGANIZATION_PROP.get());
  }
  
  /**
   * This will get the organization, its sole purpose is to have the above method act like
   * an attribute.
   * @return the organization value
   */
  public entity.Organization getOrganizationWithUpdate() {
    return ((com.guidewire.pc.domain.product.ProducerCodePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.product.ProducerCodePublicMethods")).getOrganizationWithUpdate();
  }
  
  /**
   * Gets the value of the Parent field.
   * The producer code's parent producer code.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ProducerCode getParent() {
    return (entity.ProducerCode)__getInternalInterface().getFieldValue(PARENT_PROP.get());
  }
  
  /**
   * This will get the parent producer, its sole purpose is to have the above method act like
   * an attribute.
   * @return the parent ProducerCode
   */
  public entity.ProducerCode getParentWithUpdate() {
    return ((com.guidewire.pc.domain.product.ProducerCodePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.product.ProducerCodePublicMethods")).getParentWithUpdate();
  }
  
  /**
   * Gets the value of the PreferredUnderwriter field.
   * The preferred underwriter for a producer code
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.User getPreferredUnderwriter() {
    return (entity.User)__getInternalInterface().getFieldValue(PREFERREDUNDERWRITER_PROP.get());
  }
  
  /**
   * Gets the value of the ProducerCodeRoles field.
   * Available roles to a producer code.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ProducerCodeRole[] getProducerCodeRoles() {
    return (entity.ProducerCodeRole[])__getInternalInterface().getFieldValue(PRODUCERCODEROLES_PROP.get());
  }
  
  /**
   * Gets the value of the ProducerStatus field.
   * The status of this producer code.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.ProducerStatus getProducerStatus() {
    return (typekey.ProducerStatus)__getInternalInterface().getFieldValue(PRODUCERSTATUS_PROP.get());
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Producercodecode[] getProducercodecodeArray() {
    return (entity.Producercodecode[])__getInternalInterface().getFieldValue(PRODUCERCODECODEARRAY_PROP.get());
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
   * Gets the value of the TerminationDate field.
   * Indicates when the producer relationship was or will be terminated.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getTerminationDate() {
    return (java.util.Date)__getInternalInterface().getFieldValue(TERMINATIONDATE_PROP.get());
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
   * Gets the first UserProducerCode it finds for the User
   * @param user 
   * @return the UserProducerCode for this user, else null
   */
  public entity.UserProducerCode getUserProducerCodeFor(entity.User user) {
    return ((com.guidewire.pc.domain.product.ProducerCodePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.product.ProducerCodePublicMethods")).getUserProducerCodeFor(user);
  }
  
  /**
   * Gets the value of the UserProducerCodes field.
   * Available producer codes and associated roles to a user.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.UserProducerCode[] getUserProducerCodes() {
    return (entity.UserProducerCode[])__getInternalInterface().getFieldValue(USERPRODUCERCODES_PROP.get());
  }
  
  /**
   * 
   * @param role 
   * @return all the UserProducerCodes associated with this Role and this ProducerCode
   */
  public entity.UserProducerCode[] getUserProducerCodesFor(entity.Role role) {
    return ((com.guidewire.pc.domain.product.ProducerCodePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.product.ProducerCodePublicMethods")).getUserProducerCodesFor(role);
  }
  
  /**
   * 
   * @param user 
   * @return all the UserProducerCodes associated with this User and this ProducerCode
   */
  public entity.UserProducerCode[] getUserProducerCodesFor(entity.User user) {
    return ((com.guidewire.pc.domain.product.ProducerCodePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.product.ProducerCodePublicMethods")).getUserProducerCodesFor(user);
  }
  
  /**
   * Gets the validation result.
   * @return The validation result.
   */
  public gw.api.validation.ValidationResult getValidationResult() {
    return ((com.guidewire.pl.domain.validation.ValidatablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.validation.ValidatablePublicMethods")).getValidationResult();
  }
  
  /**
   * 
   * @param user the user to test
   * @return if the ProducerCode is available for use by the user
   */
  public boolean isAvailableFor(entity.User user) {
    return ((com.guidewire.pc.domain.product.ProducerCodePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.product.ProducerCodePublicMethods")).isAvailableFor(user);
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
   * Rejects the root bean w/ a global message
   * <p/>
   * Note the reason why the bean failed validation shouldn't refer to a particular
   * field in the entity. To do that, use the rejectField() method.
   * <p/>
   * Note you can indicate failure as both an error and a warning simultaneously.
   * However, if the failure is both an error and a warning, the failure should
   * have different error and warning levels.
   * <p/>
   * @param errorLevel The corresponding level effected by the validation error.
   * @param strErrorReason The message that should be displayed to the user, to indicate the reason for the error.
   * @param warningLevel The corresponding level effected by the validation warning.
   * @param strWarningReason The message that should be displayed to the user, to indicate the reason for the warning.
   */
  public void reject(typekey.ValidationLevel errorLevel, java.lang.String strErrorReason, typekey.ValidationLevel warningLevel, java.lang.String strWarningReason) {
    ((com.guidewire.pl.domain.validation.ValidatablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.validation.ValidatablePublicMethods")).reject(errorLevel, strErrorReason, warningLevel, strWarningReason);
  }
  
  /**
   * Rejects a particular field or field path on the root bean.
   * <p/>
   * Note you can indicate failure as both an error and a warning simultaneously.
   * However, if the failure is both an error and a warning, the failure should
   * have different error and warning levels.
   * <p/>
   * @param strRelativeFieldPath The relative path from the root bean to the field that failed validation.
   * @param errorLevel The corresponding level effected by the validation error.
   * @param strErrorReason The message that should be displayed to the user, to indicate the reason for the error.
   * @param warningLevel The corresponding level effected by the validation warning.
   * @param strWarningReason The message that should be displayed to the user, to indicate the reason for the warning.
   */
  public void rejectField(java.lang.String strRelativeFieldPath, typekey.ValidationLevel errorLevel, java.lang.String strErrorReason, typekey.ValidationLevel warningLevel, java.lang.String strWarningReason) {
    ((com.guidewire.pl.domain.validation.ValidatablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.validation.ValidatablePublicMethods")).rejectField(strRelativeFieldPath, errorLevel, strErrorReason, warningLevel, strWarningReason);
  }
  
  /**
   * Rejects a particular field or field path on the root bean.
   * <p/>
   * Note you can indicate failure as both an error and a warning simultaneously.
   * However, if the failure is both an error and a warning, the failure should
   * have different error and warning levels.
   * <p/>
   * @param strRelativeFieldPath The relative path from the root bean to the field that failed validation.
   * @param errorLevel The corresponding level effected by the validation error.
   * @param strErrorReason The message that should be displayed to the user, to indicate the reason for the error.
   * @param warningLevel The corresponding level effected by the validation warning.
   * @param strWarningReason The message that should be displayed to the user, to indicate the reason for the warning.
   * @param flowStepId The process FlowStep that this error applies to, if any
   */
  public void rejectFieldWithFlowStep(java.lang.String strRelativeFieldPath, typekey.ValidationLevel errorLevel, java.lang.String strErrorReason, typekey.ValidationLevel warningLevel, java.lang.String strWarningReason, java.lang.String flowStepId) {
    ((com.guidewire.pl.domain.validation.ValidatablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.validation.ValidatablePublicMethods")).rejectFieldWithFlowStep(strRelativeFieldPath, errorLevel, strErrorReason, warningLevel, strWarningReason, flowStepId);
  }
  
  /**
   * Reject a particular field of field path on a bean related to the root
   * bean, e.g. an array element of the bean such as an Exposure of a Claim.
   * <p/>
   * Note you can indicate failure as both an error and a warning simultaneously.
   * However, if the failure is both an error and a warning, the failure should
   * have different error and warning levels.
   * <p/>
   * @param relatedBean Bean related to the root bean
   * @param strRelativeFieldPath The relative path from the root bean to the field that failed validation.
   * @param errorLevel The corresponding level effected by the validation error.
   * @param strErrorReason The message that should be displayed to the user, to indicate the reason for the error.
   * @param warningLevel The corresponding level effected by the validation warning.
   * @param strWarningReason The message that should be displayed to the user, to indicate the reason for the warning.
   */
  public void rejectSubField(entity.KeyableBean relatedBean, java.lang.String strRelativeFieldPath, typekey.ValidationLevel errorLevel, java.lang.String strErrorReason, typekey.ValidationLevel warningLevel, java.lang.String strWarningReason) {
    ((com.guidewire.pl.domain.validation.ValidatablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.validation.ValidatablePublicMethods")).rejectSubField(relatedBean, strRelativeFieldPath, errorLevel, strErrorReason, warningLevel, strWarningReason);
  }
  
  /**
   * Reject a particular field of field path on a bean related to the root
   * bean, e.g. an array element of the bean such as an Exposure of a Claim.
   * <p/>
   * Note you can indicate failure as both an error and a warning simultaneously.
   * However, if the failure is both an error and a warning, the failure should
   * have different error and warning levels.
   * <p/>
   * Note that this is the fullest version of "reject"; all the others are
   * overloaded for easier use.
   * @param relatedBean Bean related to the root bean
   * @param strRelativeFieldPath The relative path from the root bean to the field that failed validation.
   * @param errorLevel The corresponding level effected by the validation error.
   * @param strErrorReason The message that should be displayed to the user, to indicate the reason for the error.
   * @param warningLevel The corresponding level effected by the validation warning.
   * @param strWarningReason The message that should be displayed to the user, to indicate the reason for the warning.
   * @param flowStepId The process FlowStep that this error applies to, if any
   */
  public void rejectSubFieldWithFlowStep(entity.KeyableBean relatedBean, java.lang.String strRelativeFieldPath, typekey.ValidationLevel errorLevel, java.lang.String strErrorReason, typekey.ValidationLevel warningLevel, java.lang.String strWarningReason, java.lang.String flowStepId) {
    ((com.guidewire.pl.domain.validation.ValidatablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.validation.ValidatablePublicMethods")).rejectSubFieldWithFlowStep(relatedBean, strRelativeFieldPath, errorLevel, strErrorReason, warningLevel, strWarningReason, flowStepId);
  }
  
  /**
   * Rejects the root bean w/ a global message
   * <p/>
   * Note the reason why the bean failed validation shouldn't refer to a particular
   * field in the entity. To do that, use the rejectField() method.
   * <p/>
   * Note you can indicate failure as both an error and a warning simultaneously.
   * However, if the failure is both an error and a warning, the failure should
   * have different error and warning levels.
   * <p/>
   * @param errorLevel The corresponding level effected by the validation error.
   * @param strErrorReason The message that should be displayed to the user, to indicate the reason for the error.
   * @param warningLevel The corresponding level effected by the validation warning.
   * @param strWarningReason The message that should be displayed to the user, to indicate the reason for the warning.
   * @param flowStepId The process FlowStep that this error applies to, if any
   */
  public void rejectWithFlowStep(typekey.ValidationLevel errorLevel, java.lang.String strErrorReason, typekey.ValidationLevel warningLevel, java.lang.String strWarningReason, java.lang.String flowStepId) {
    ((com.guidewire.pl.domain.validation.ValidatablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.validation.ValidatablePublicMethods")).rejectWithFlowStep(errorLevel, strErrorReason, warningLevel, strWarningReason, flowStepId);
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
   * Removes <code>Currency</code> from the set of roles associated with this producer code.
   * @param currency the Currency to remove
   * @return true if <code>Currency</code> was previously associated with
   *         this producer code; false if this method was a no-op.
   */
  public boolean removeCurrency(typekey.Currency currency) {
    return ((com.guidewire.pc.domain.product.ProducerCodePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.product.ProducerCodePublicMethods")).removeCurrency(currency);
  }
  
  /**
   * Removes the given element from the AffinityGroupProducerCodes array. This is achieved by marking the element for removal.
   */
  public void removeFromAffinityGroupProducerCodes(entity.AffinityGroupProducerCode element) {
    __getInternalInterface().removeArrayElement(AFFINITYGROUPPRODUCERCODES_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the AffinityGroupProducerCodes array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromAffinityGroupProducerCodes(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(AFFINITYGROUPPRODUCERCODES_PROP.get(), elementID);
  }
  
  /**
   * Removes the given element from the CommissionPlans array. This is achieved by marking the element for removal.
   */
  public void removeFromCommissionPlans(entity.CommissionPlan element) {
    __getInternalInterface().removeArrayElement(COMMISSIONPLANS_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the CommissionPlans array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromCommissionPlans(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(COMMISSIONPLANS_PROP.get(), elementID);
  }
  
  /**
   * Removes the given element from the GroupProducerCodes array. This is achieved by marking the element for removal.
   */
  public void removeFromGroupProducerCodes(entity.GroupProducerCode element) {
    __getInternalInterface().removeArrayElement(GROUPPRODUCERCODES_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the GroupProducerCodes array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromGroupProducerCodes(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(GROUPPRODUCERCODES_PROP.get(), elementID);
  }
  
  /**
   * Removes the given element from the ProducerCodeRoles array. This is achieved by marking the element for removal.
   */
  public void removeFromProducerCodeRoles(entity.ProducerCodeRole element) {
    __getInternalInterface().removeArrayElement(PRODUCERCODEROLES_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the ProducerCodeRoles array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromProducerCodeRoles(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(PRODUCERCODEROLES_PROP.get(), elementID);
  }
  
  /**
   * Removes the given element from the UserProducerCodes array. This is achieved by marking the element for removal.
   */
  public void removeFromUserProducerCodes(entity.UserProducerCode element) {
    __getInternalInterface().removeArrayElement(USERPRODUCERCODES_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the UserProducerCodes array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromUserProducerCodes(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(USERPRODUCERCODES_PROP.get(), elementID);
  }
  
  /**
   * Removes <code>group</code> and all its descendants from
   * the set of groups associated with this producer code.
   * @param group the group to remove
   * @return true if <code>group</code> was previously associated with
   *         this producer code; false if this method was a no-op.
   */
  public boolean removeGroup(entity.Group group) {
    return ((com.guidewire.pc.domain.product.ProducerCodePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.product.ProducerCodePublicMethods")).removeGroup(group);
  }
  
  /**
   * Removes <code>role</code> from the set of roles associated with this producer code.
   * @param role the role to remove
   * @return true if <code>role</code> was previously associated with
   *         this producer code; false if this method was a no-op.
   */
  public boolean removeRole(entity.Role role) {
    return ((com.guidewire.pc.domain.product.ProducerCodePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.product.ProducerCodePublicMethods")).removeRole(role);
  }
  
  /**
   * Removes <code>User</code> from the set of users associated with this producer code.
   * 
   * If no containing Organization exists, will short circuit.
   * @param user the user to remove
   * @return true if <code>user</code> was previously associated with
   *         this producer code; false if this method was a no-op.
   */
  public boolean removeUser(entity.User user) {
    return ((com.guidewire.pc.domain.product.ProducerCodePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.product.ProducerCodePublicMethods")).removeUser(user);
  }
  
  /**
   * Sets the value of the Address field.
   */
  public void setAddress(entity.Address value) {
    __getInternalInterface().setFieldValue(ADDRESS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the AddressPublicID field.
   */
  public void setAddressPublicID(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(ADDRESSPUBLICID_PROP.get(), value);
  }
  
  /**
   * Sets the value of the AffinityGroupProducerCodes field.
   */
  public void setAffinityGroupProducerCodes(entity.AffinityGroupProducerCode[] value) {
    __getInternalInterface().setFieldValue(AFFINITYGROUPPRODUCERCODES_PROP.get(), value);
  }
  
  /**
   * Sets the value of the AppointmentDate field.
   */
  public void setAppointmentDate(java.util.Date value) {
    __getInternalInterface().setFieldValue(APPOINTMENTDATE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the BeanVersion field.
   */
  private void setBeanVersion(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(BEANVERSION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Branch field.
   */
  public void setBranch(entity.Group value) {
    __getInternalInterface().setFieldValue(BRANCH_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Code field.
   */
  public void setCode(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(CODE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the CodeDenorm field.
   */
  private void setCodeDenorm(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(CODEDENORM_PROP.get(), value);
  }
  
  /**
   * Sets the value of the CommissionPlans field.
   */
  public void setCommissionPlans(entity.CommissionPlan[] value) {
    __getInternalInterface().setFieldValue(COMMISSIONPLANS_PROP.get(), value);
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
   * Sets the value of the DescriptionDenorm field.
   */
  private void setDescriptionDenorm(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(DESCRIPTIONDENORM_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Description_L10N_ARRAY field.
   */
  private void setDescription_L10N_ARRAY(entity.ProducerCode_Description_L10N[] value) {
    __getInternalInterface().setFieldValue(DESCRIPTION_L10N_ARRAY_PROP.get(), value);
  }
  
  /**
   * Array association mutator for key Description_ on array Description_L10N_ARRAY
   */
  public void setDescription_en_US(java.lang.String value) {
    __getInternalInterface().setLocalizedFieldValueForCodeGen((com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo)TYPE.get().getTypeInfo().getProperty("Description_en_US"), value);
  }
  
  /**
   * Sets the value of the GroupProducerCodes field.
   */
  public void setGroupProducerCodes(entity.GroupProducerCode[] value) {
    __getInternalInterface().setFieldValue(GROUPPRODUCERCODES_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ID field.
   */
  private void setID(gw.pl.persistence.core.Key value) {
    __getInternalInterface().setFieldValue(ID_PROP.get(), value);
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
   * Sets the value of the Organization field.
   */
  public void setOrganization(entity.Organization value) {
    __getInternalInterface().setFieldValue(ORGANIZATION_PROP.get(), value);
  }
  
  /**
   * This will update the organization by removing the current groups and adding
   * the root group of the new organization.
   * @param org the new organization value
   */
  public void setOrganizationWithUpdate(entity.Organization org) {
    ((com.guidewire.pc.domain.product.ProducerCodePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.product.ProducerCodePublicMethods")).setOrganizationWithUpdate(org);
  }
  
  /**
   * Sets the value of the Parent field.
   */
  public void setParent(entity.ProducerCode value) {
    __getInternalInterface().setFieldValue(PARENT_PROP.get(), value);
  }
  
  /**
   * This will update the branch and underwriter from the parent producer code
   * @param parent the ProducerCode to consider the parent
   */
  public void setParentWithUpdate(entity.ProducerCode parent) {
    ((com.guidewire.pc.domain.product.ProducerCodePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.product.ProducerCodePublicMethods")).setParentWithUpdate(parent);
  }
  
  /**
   * Sets the value of the PreferredUnderwriter field.
   */
  public void setPreferredUnderwriter(entity.User value) {
    __getInternalInterface().setFieldValue(PREFERREDUNDERWRITER_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ProducerCodeRoles field.
   */
  public void setProducerCodeRoles(entity.ProducerCodeRole[] value) {
    __getInternalInterface().setFieldValue(PRODUCERCODEROLES_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ProducerStatus field.
   */
  public void setProducerStatus(typekey.ProducerStatus value) {
    __getInternalInterface().setFieldValue(PRODUCERSTATUS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ProducercodecodeArray field.
   */
  private void setProducercodecodeArray(entity.Producercodecode[] value) {
    __getInternalInterface().setFieldValue(PRODUCERCODECODEARRAY_PROP.get(), value);
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
   * Sets the value of the TerminationDate field.
   */
  public void setTerminationDate(java.util.Date value) {
    __getInternalInterface().setFieldValue(TERMINATIONDATE_PROP.get(), value);
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
   * This will set the users availability to the given value,
   * if true will add the user, if false will remove the user
   * @param user the user to work with
   * @param value the value of to set availability to
   */
  public void setUserAvailability(entity.User user, java.lang.Boolean value) {
    ((com.guidewire.pc.domain.product.ProducerCodePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.product.ProducerCodePublicMethods")).setUserAvailability(user, value);
  }
  
  /**
   * Sets the value of the UserProducerCodes field.
   */
  public void setUserProducerCodes(entity.UserProducerCode[] value) {
    __getInternalInterface().setFieldValue(USERPRODUCERCODES_PROP.get(), value);
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
  
  /**
   * Set commission plan with the appropriate currency.
   * @param currency 
   * @param planID 
   */
  public void updateCommissionPlanID(typekey.Currency currency, java.lang.String planID) {
    ((com.guidewire.pc.domain.product.ProducerCodePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.product.ProducerCodePublicMethods")).updateCommissionPlanID(currency, planID);
  }
  
  private class _Internal extends com.guidewire.pl.persistence.code.BeanInternalBase implements com.guidewire._generated.entity.ProducerCodeInternal {
    protected com.guidewire.pl.persistence.code.DelegateLoader __getDelegateManager() {
      return entity.ProducerCode.this.__getDelegateManager();
    }
    
    /**
     * Creates a new CommissionPlan in the given Currency and adds it to this ProducerCode's CommissionPlans.
     * 
     * Callers should use findCommissionPlanByCurrency() to retrieve the added CommissionPlan.
     * 
     * This method will throw an exception if called with a Currency for which a CommissionPlan already exists (for this ProducerCode).
     * @param currency the Currency in which the CommissionPlan should be created.
     */
    public void addCommissionPlanForCurrency(typekey.Currency currency) {
      ((com.guidewire.pc.domain.product.ProducerCodePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.product.ProducerCodePublicMethods")).addCommissionPlanForCurrency(currency);
    }
    
    public void addEvent(com.guidewire.pl.system.entity.BeanEvent event) {
      ((com.guidewire.pl.domain.messaging.impl.EventAwareInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.messaging.impl.EventAwareInternalMethods")).addEvent(event);
    }
    
    /**
     * Associates an event with the bean, which will be fired when the bean is
     * committed. A bean with an event is considered changed.
     * @param strEventId The event id.
     */
    public void addEvent(java.lang.String strEventId) {
      ((com.guidewire.pl.domain.messaging.EventAwarePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.messaging.EventAwarePublicMethods")).addEvent(strEventId);
    }
    
    /**
     * Adds <code>group</code> and all its ancestors to
     * the set of groups associated with this producer code.
     * For the purposes of this method, the set of ancestors
     * of a group is defined to include all ancestor Groups
     * in its immediate Group tree, plus all the root Groups
     * associated with (not necessarily proper) ancestor
     * Organizations of its nearest containing Organization.
     * @param group 
     * @return true if <code>group</code> was not previously associated with
     *         this producer code; false if this method was a no-op.
     */
    public boolean addGroup(entity.Group group) {
      return ((com.guidewire.pc.domain.product.ProducerCodePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.product.ProducerCodePublicMethods")).addGroup(group);
    }
    
    /**
     * Adds <code>role</code> to the set of roles associated with this producer code.
     * @param role 
     * @return the created ProducerCodeRole if <code>role</code> was not previously associated with
     *         this producer code; null if this method was a no-op.
     */
    public entity.ProducerCodeRole addRole(entity.Role role) {
      return ((com.guidewire.pc.domain.product.ProducerCodePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.product.ProducerCodePublicMethods")).addRole(role);
    }
    
    /**
     * Adds the given element to the AffinityGroupProducerCodes array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToAffinityGroupProducerCodes(entity.AffinityGroupProducerCode element) {
      __getInternalInterface().addArrayElement(AFFINITYGROUPPRODUCERCODES_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the CommissionPlans array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToCommissionPlans(entity.CommissionPlan element) {
      __getInternalInterface().addArrayElement(COMMISSIONPLANS_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the Description_L10N_ARRAY array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToDescription_L10N_ARRAY(entity.ProducerCode_Description_L10N element) {
      __getInternalInterface().addArrayElement(DESCRIPTION_L10N_ARRAY_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the GroupProducerCodes array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToGroupProducerCodes(entity.GroupProducerCode element) {
      __getInternalInterface().addArrayElement(GROUPPRODUCERCODES_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the ProducerCodeRoles array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToProducerCodeRoles(entity.ProducerCodeRole element) {
      __getInternalInterface().addArrayElement(PRODUCERCODEROLES_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the ProducercodecodeArray array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToProducercodecodeArray(entity.Producercodecode element) {
      __getInternalInterface().addArrayElement(PRODUCERCODECODEARRAY_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the UserProducerCodes array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToUserProducerCodes(entity.UserProducerCode element) {
      __getInternalInterface().addArrayElement(USERPRODUCERCODES_PROP.get(), element);
    }
    
    /**
     * Adds <code>user</code> to the set of users associated with this producer code by creating all
     * UserProducerCode rows with the available roles from all the ProducerCode's roles.
     * @param user 
     * @return the created UserProducerCode if <code>user</code> was not previously associated with
     *         this producer code; null if this method was a no-op.
     */
    public boolean addUser(entity.User user) {
      return ((com.guidewire.pc.domain.product.ProducerCodePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.product.ProducerCodePublicMethods")).addUser(user);
    }
    
    /**
     * Creates a new record for the UserProducerCode table with the appropriate Role.
     * @param user 
     * @param role 
     * @return The created User Producer Code Role
     */
    public entity.UserProducerCode addUserProducerCodeRole(entity.User user, entity.Role role) {
      return ((com.guidewire.pc.domain.product.ProducerCodePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.product.ProducerCodePublicMethods")).addUserProducerCodeRole(user, role);
    }
    
    public boolean alwaysReserveID() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).alwaysReserveID();
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
    
    /**
     * Finds the Commission Plan associated with this Producer Code for the given
     * Currency. This will return null if there is no Commission Plan for the specified currency.
     * @param currency the Currency to use when looking up the Commission Plan.
     * @return the Commission Plan with the specified currency, or null if no Commission Plan exists for this Producer Code and currency.
     */
    public entity.CommissionPlan findCommissionPlanByCurrency(typekey.Currency currency) {
      return ((com.guidewire.pc.domain.product.ProducerCodePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.product.ProducerCodePublicMethods")).findCommissionPlanByCurrency(currency);
    }
    
    public java.util.List generateInsertEvents() {
      return ((com.guidewire.pl.domain.messaging.impl.EventAwareInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.messaging.impl.EventAwareInternalMethods")).generateInsertEvents();
    }
    
    public java.util.List<com.guidewire.pl.system.integration.messaging.events.EventDescriptor> generateInsertEventsInternal() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).generateInsertEventsInternal();
    }
    
    public java.util.List generateRemoveEvents() {
      return ((com.guidewire.pl.domain.messaging.impl.EventAwareInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.messaging.impl.EventAwareInternalMethods")).generateRemoveEvents();
    }
    
    public java.util.List<com.guidewire.pl.system.integration.messaging.events.EventDescriptor> generateRemoveEventsInternal() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).generateRemoveEventsInternal();
    }
    
    public java.util.List generateUpdateEvents() {
      return ((com.guidewire.pl.domain.messaging.impl.EventAwareInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.messaging.impl.EventAwareInternalMethods")).generateUpdateEvents();
    }
    
    public java.util.List<com.guidewire.pl.system.integration.messaging.events.EventDescriptor> generateUpdateEventsInternal() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).generateUpdateEventsInternal();
    }
    
    /**
     * Gets the value of the Address field.
     * The contact for this producer code.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.Address getAddress() {
      return (entity.Address)__getInternalInterface().getFieldValue(ADDRESS_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getAddressID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(ADDRESS_PROP.get());
    }
    
    /**
     * Gets the value of the AddressPublicID field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getAddressPublicID() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ADDRESSPUBLICID_PROP.get());
    }
    
    /**
     * Gets the value of the AffinityGroupProducerCodes field.
     * Available groups to a producer code.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.AffinityGroupProducerCode[] getAffinityGroupProducerCodes() {
      return (entity.AffinityGroupProducerCode[])__getInternalInterface().getFieldValue(AFFINITYGROUPPRODUCERCODES_PROP.get());
    }
    
    /**
     * Returns the ProducerCode's Currencies
     * @return the Currencies as a set
     */
    public java.util.Set<typekey.Currency> getAllCurrencies() {
      return ((com.guidewire.pc.domain.product.ProducerCodePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.product.ProducerCodePublicMethods")).getAllCurrencies();
    }
    
    /**
     * Returns the ProducerCode's Groups
     * @return the Groups as a set
     */
    public java.util.Set getAllGroups() {
      return ((com.guidewire.pc.domain.product.ProducerCodePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.product.ProducerCodePublicMethods")).getAllGroups();
    }
    
    /**
     * Returns the ProducerCode's Users
     * @return the Users as an array
     */
    public entity.User[] getAllUsers() {
      return ((com.guidewire.pc.domain.product.ProducerCodePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.product.ProducerCodePublicMethods")).getAllUsers();
    }
    
    /**
     * Gets the value of the AppointmentDate field.
     * Indicates when the carrier's relationship with the producer began.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getAppointmentDate() {
      return (java.util.Date)__getInternalInterface().getFieldValue(APPOINTMENTDATE_PROP.get());
    }
    
    /**
     * Returns all Roles that apply to Producer Codes
     * i.e. of types ProducerCode and UserProducerCode
     * For producer codes that belong to -
     * internal orgs, returns all roles
     * external orgs, returns only external roles
     */
    public entity.Role[] getAvailableRoles() {
      return ((com.guidewire.pc.domain.product.ProducerCodePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.product.ProducerCodePublicMethods")).getAvailableRoles();
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getBeanVersion() {
      return ((com.guidewire.pl.domain.persistence.core.VersionablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods")).getBeanVersion();
    }
    
    /**
     * Gets the value of the Branch field.
     * The internal (carrier) branch that handles the business for this producer code.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.Group getBranch() {
      return (entity.Group)__getInternalInterface().getFieldValue(BRANCH_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getBranchID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(BRANCH_PROP.get());
    }
    
    /**
     * Gets the value of the Code field.
     * The producer code.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getCode() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(CODE_PROP.get());
    }
    
    /**
     * Gets the value of the CodeDenorm field.
     * denorm field for Code
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getCodeDenorm() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(CODEDENORM_PROP.get());
    }
    
    public entity.CommissionPlan getCommissionPlanFor(typekey.Currency currency) {
      return ((com.guidewire.pc.domain.product.impl.ProducerCodeInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.product.impl.ProducerCodeInternalMethods")).getCommissionPlanFor(currency);
    }
    
    /**
     * Returns the ProducerCode's commission plans IDs
     * @return the commission plan IDs as a set
     */
    public java.util.Set<java.lang.String> getCommissionPlanIDs() {
      return ((com.guidewire.pc.domain.product.ProducerCodePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.product.ProducerCodePublicMethods")).getCommissionPlanIDs();
    }
    
    /**
     * Gets the value of the CommissionPlans field.
     * Currencies allowed to be used by the producer code as billing currency.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.CommissionPlan[] getCommissionPlans() {
      return (entity.CommissionPlan[])__getInternalInterface().getFieldValue(COMMISSIONPLANS_PROP.get());
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
     * Gets the value of the Description field.
     * The producer code description.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getDescription() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(DESCRIPTION_PROP.get());
    }
    
    /**
     * Gets the value of the DescriptionDenorm field.
     * denorm field for Description
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getDescriptionDenorm() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(DESCRIPTIONDENORM_PROP.get());
    }
    
    /**
     * Gets the value of the Description_L10N_ARRAY field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.ProducerCode_Description_L10N[] getDescription_L10N_ARRAY() {
      return (entity.ProducerCode_Description_L10N[])__getInternalInterface().getFieldValue(DESCRIPTION_L10N_ARRAY_PROP.get());
    }
    
    /**
     * Array association for partition Description_L10N_ARRAYByLanguage on array Description_L10N_ARRAY
     */
    public entity.ProducerCode_Description_L10N getDescription_L10N_ARRAYByLanguage(com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo property) {
      return (entity.ProducerCode_Description_L10N)__getInternalInterface().getAssociativeArrayValue(property);
    }
    
    public com.guidewire.pl.system.entity.BeanEvent[] getEvents() {
      return ((com.guidewire.pl.domain.messaging.impl.EventAwareInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.messaging.impl.EventAwareInternalMethods")).getEvents();
    }
    
    public entity.GroupProducerCode getGroupProducerCodeFor(entity.Group group) {
      return ((com.guidewire.pc.domain.product.impl.ProducerCodeInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.product.impl.ProducerCodeInternalMethods")).getGroupProducerCodeFor(group);
    }
    
    /**
     * Gets the value of the GroupProducerCodes field.
     * Available producer codes to an external producer group.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.GroupProducerCode[] getGroupProducerCodes() {
      return (entity.GroupProducerCode[])__getInternalInterface().getFieldValue(GROUPPRODUCERCODES_PROP.get());
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
     * Gets the value of the Organization field.
     * The Organization this producer code belongs to.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.Organization getOrganization() {
      return (entity.Organization)__getInternalInterface().getFieldValue(ORGANIZATION_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getOrganizationID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(ORGANIZATION_PROP.get());
    }
    
    /**
     * This will get the organization, its sole purpose is to have the above method act like
     * an attribute.
     * @return the organization value
     */
    public entity.Organization getOrganizationWithUpdate() {
      return ((com.guidewire.pc.domain.product.ProducerCodePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.product.ProducerCodePublicMethods")).getOrganizationWithUpdate();
    }
    
    /**
     * Gets the value of the Parent field.
     * The producer code's parent producer code.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.ProducerCode getParent() {
      return (entity.ProducerCode)__getInternalInterface().getFieldValue(PARENT_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getParentID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(PARENT_PROP.get());
    }
    
    /**
     * This will get the parent producer, its sole purpose is to have the above method act like
     * an attribute.
     * @return the parent ProducerCode
     */
    public entity.ProducerCode getParentWithUpdate() {
      return ((com.guidewire.pc.domain.product.ProducerCodePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.product.ProducerCodePublicMethods")).getParentWithUpdate();
    }
    
    /**
     * Gets the value of the PreferredUnderwriter field.
     * The preferred underwriter for a producer code
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.User getPreferredUnderwriter() {
      return (entity.User)__getInternalInterface().getFieldValue(PREFERREDUNDERWRITER_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getPreferredUnderwriterID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(PREFERREDUNDERWRITER_PROP.get());
    }
    
    public entity.ProducerCodeRole getProducerCodeRoleFor(entity.Role role) {
      return ((com.guidewire.pc.domain.product.impl.ProducerCodeInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.product.impl.ProducerCodeInternalMethods")).getProducerCodeRoleFor(role);
    }
    
    /**
     * Gets the value of the ProducerCodeRoles field.
     * Available roles to a producer code.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.ProducerCodeRole[] getProducerCodeRoles() {
      return (entity.ProducerCodeRole[])__getInternalInterface().getFieldValue(PRODUCERCODEROLES_PROP.get());
    }
    
    /**
     * Gets the value of the ProducerStatus field.
     * The status of this producer code.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.ProducerStatus getProducerStatus() {
      return (typekey.ProducerStatus)__getInternalInterface().getFieldValue(PRODUCERSTATUS_PROP.get());
    }
    
    /**
     * Gets the value of the ProducercodecodeArray field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.Producercodecode[] getProducercodecodeArray() {
      return (entity.Producercodecode[])__getInternalInterface().getFieldValue(PRODUCERCODECODEARRAY_PROP.get());
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getPublicID() {
      return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getPublicID();
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Long getRetiredValue() {
      return ((com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods")).getRetiredValue();
    }
    
    /**
     * Gets the value of the TerminationDate field.
     * Indicates when the producer relationship was or will be terminated.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getTerminationDate() {
      return (java.util.Date)__getInternalInterface().getFieldValue(TERMINATIONDATE_PROP.get());
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
    
    /**
     * Gets the first UserProducerCode it finds for the User
     * @param user 
     * @return the UserProducerCode for this user, else null
     */
    public entity.UserProducerCode getUserProducerCodeFor(entity.User user) {
      return ((com.guidewire.pc.domain.product.ProducerCodePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.product.ProducerCodePublicMethods")).getUserProducerCodeFor(user);
    }
    
    /**
     * Gets the value of the UserProducerCodes field.
     * Available producer codes and associated roles to a user.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.UserProducerCode[] getUserProducerCodes() {
      return (entity.UserProducerCode[])__getInternalInterface().getFieldValue(USERPRODUCERCODES_PROP.get());
    }
    
    /**
     * 
     * @param role 
     * @return all the UserProducerCodes associated with this Role and this ProducerCode
     */
    public entity.UserProducerCode[] getUserProducerCodesFor(entity.Role role) {
      return ((com.guidewire.pc.domain.product.ProducerCodePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.product.ProducerCodePublicMethods")).getUserProducerCodesFor(role);
    }
    
    /**
     * 
     * @param user 
     * @return all the UserProducerCodes associated with this User and this ProducerCode
     */
    public entity.UserProducerCode[] getUserProducerCodesFor(entity.User user) {
      return ((com.guidewire.pc.domain.product.ProducerCodePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.product.ProducerCodePublicMethods")).getUserProducerCodesFor(user);
    }
    
    /**
     * Gets the validation result.
     * @return The validation result.
     */
    public gw.api.validation.ValidationResult getValidationResult() {
      return ((com.guidewire.pl.domain.validation.ValidatablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.validation.ValidatablePublicMethods")).getValidationResult();
    }
    
    public void initInBundle(gw.pl.persistence.core.Key id, gw.pl.persistence.core.Bundle bundle) {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).initInBundle(id, bundle);
    }
    
    /**
     * 
     * @param user the user to test
     * @return if the ProducerCode is available for use by the user
     */
    public boolean isAvailableFor(entity.User user) {
      return ((com.guidewire.pc.domain.product.ProducerCodePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.product.ProducerCodePublicMethods")).isAvailableFor(user);
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
    
    public boolean isOkToRetire() {
      return ((com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods")).isOkToRetire();
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
    
    /**
     * Rejects the root bean w/ a global message
     * <p/>
     * Note the reason why the bean failed validation shouldn't refer to a particular
     * field in the entity. To do that, use the rejectField() method.
     * <p/>
     * Note you can indicate failure as both an error and a warning simultaneously.
     * However, if the failure is both an error and a warning, the failure should
     * have different error and warning levels.
     * <p/>
     * @param errorLevel The corresponding level effected by the validation error.
     * @param strErrorReason The message that should be displayed to the user, to indicate the reason for the error.
     * @param warningLevel The corresponding level effected by the validation warning.
     * @param strWarningReason The message that should be displayed to the user, to indicate the reason for the warning.
     */
    public void reject(typekey.ValidationLevel errorLevel, java.lang.String strErrorReason, typekey.ValidationLevel warningLevel, java.lang.String strWarningReason) {
      ((com.guidewire.pl.domain.validation.ValidatablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.validation.ValidatablePublicMethods")).reject(errorLevel, strErrorReason, warningLevel, strWarningReason);
    }
    
    /**
     * Rejects a particular field or field path on the root bean.
     * <p/>
     * Note you can indicate failure as both an error and a warning simultaneously.
     * However, if the failure is both an error and a warning, the failure should
     * have different error and warning levels.
     * <p/>
     * @param strRelativeFieldPath The relative path from the root bean to the field that failed validation.
     * @param errorLevel The corresponding level effected by the validation error.
     * @param strErrorReason The message that should be displayed to the user, to indicate the reason for the error.
     * @param warningLevel The corresponding level effected by the validation warning.
     * @param strWarningReason The message that should be displayed to the user, to indicate the reason for the warning.
     */
    public void rejectField(java.lang.String strRelativeFieldPath, typekey.ValidationLevel errorLevel, java.lang.String strErrorReason, typekey.ValidationLevel warningLevel, java.lang.String strWarningReason) {
      ((com.guidewire.pl.domain.validation.ValidatablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.validation.ValidatablePublicMethods")).rejectField(strRelativeFieldPath, errorLevel, strErrorReason, warningLevel, strWarningReason);
    }
    
    /**
     * Rejects a particular field or field path on the root bean.
     * <p/>
     * Note you can indicate failure as both an error and a warning simultaneously.
     * However, if the failure is both an error and a warning, the failure should
     * have different error and warning levels.
     * <p/>
     * @param strRelativeFieldPath The relative path from the root bean to the field that failed validation.
     * @param errorLevel The corresponding level effected by the validation error.
     * @param strErrorReason The message that should be displayed to the user, to indicate the reason for the error.
     * @param warningLevel The corresponding level effected by the validation warning.
     * @param strWarningReason The message that should be displayed to the user, to indicate the reason for the warning.
     * @param flowStepId The process FlowStep that this error applies to, if any
     */
    public void rejectFieldWithFlowStep(java.lang.String strRelativeFieldPath, typekey.ValidationLevel errorLevel, java.lang.String strErrorReason, typekey.ValidationLevel warningLevel, java.lang.String strWarningReason, java.lang.String flowStepId) {
      ((com.guidewire.pl.domain.validation.ValidatablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.validation.ValidatablePublicMethods")).rejectFieldWithFlowStep(strRelativeFieldPath, errorLevel, strErrorReason, warningLevel, strWarningReason, flowStepId);
    }
    
    /**
     * Reject a particular field of field path on a bean related to the root
     * bean, e.g. an array element of the bean such as an Exposure of a Claim.
     * <p/>
     * Note you can indicate failure as both an error and a warning simultaneously.
     * However, if the failure is both an error and a warning, the failure should
     * have different error and warning levels.
     * <p/>
     * @param relatedBean Bean related to the root bean
     * @param strRelativeFieldPath The relative path from the root bean to the field that failed validation.
     * @param errorLevel The corresponding level effected by the validation error.
     * @param strErrorReason The message that should be displayed to the user, to indicate the reason for the error.
     * @param warningLevel The corresponding level effected by the validation warning.
     * @param strWarningReason The message that should be displayed to the user, to indicate the reason for the warning.
     */
    public void rejectSubField(entity.KeyableBean relatedBean, java.lang.String strRelativeFieldPath, typekey.ValidationLevel errorLevel, java.lang.String strErrorReason, typekey.ValidationLevel warningLevel, java.lang.String strWarningReason) {
      ((com.guidewire.pl.domain.validation.ValidatablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.validation.ValidatablePublicMethods")).rejectSubField(relatedBean, strRelativeFieldPath, errorLevel, strErrorReason, warningLevel, strWarningReason);
    }
    
    /**
     * Reject a particular field of field path on a bean related to the root
     * bean, e.g. an array element of the bean such as an Exposure of a Claim.
     * <p/>
     * Note you can indicate failure as both an error and a warning simultaneously.
     * However, if the failure is both an error and a warning, the failure should
     * have different error and warning levels.
     * <p/>
     * Note that this is the fullest version of "reject"; all the others are
     * overloaded for easier use.
     * @param relatedBean Bean related to the root bean
     * @param strRelativeFieldPath The relative path from the root bean to the field that failed validation.
     * @param errorLevel The corresponding level effected by the validation error.
     * @param strErrorReason The message that should be displayed to the user, to indicate the reason for the error.
     * @param warningLevel The corresponding level effected by the validation warning.
     * @param strWarningReason The message that should be displayed to the user, to indicate the reason for the warning.
     * @param flowStepId The process FlowStep that this error applies to, if any
     */
    public void rejectSubFieldWithFlowStep(entity.KeyableBean relatedBean, java.lang.String strRelativeFieldPath, typekey.ValidationLevel errorLevel, java.lang.String strErrorReason, typekey.ValidationLevel warningLevel, java.lang.String strWarningReason, java.lang.String flowStepId) {
      ((com.guidewire.pl.domain.validation.ValidatablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.validation.ValidatablePublicMethods")).rejectSubFieldWithFlowStep(relatedBean, strRelativeFieldPath, errorLevel, strErrorReason, warningLevel, strWarningReason, flowStepId);
    }
    
    /**
     * Rejects the root bean w/ a global message
     * <p/>
     * Note the reason why the bean failed validation shouldn't refer to a particular
     * field in the entity. To do that, use the rejectField() method.
     * <p/>
     * Note you can indicate failure as both an error and a warning simultaneously.
     * However, if the failure is both an error and a warning, the failure should
     * have different error and warning levels.
     * <p/>
     * @param errorLevel The corresponding level effected by the validation error.
     * @param strErrorReason The message that should be displayed to the user, to indicate the reason for the error.
     * @param warningLevel The corresponding level effected by the validation warning.
     * @param strWarningReason The message that should be displayed to the user, to indicate the reason for the warning.
     * @param flowStepId The process FlowStep that this error applies to, if any
     */
    public void rejectWithFlowStep(typekey.ValidationLevel errorLevel, java.lang.String strErrorReason, typekey.ValidationLevel warningLevel, java.lang.String strWarningReason, java.lang.String flowStepId) {
      ((com.guidewire.pl.domain.validation.ValidatablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.validation.ValidatablePublicMethods")).rejectWithFlowStep(errorLevel, strErrorReason, warningLevel, strWarningReason, flowStepId);
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
    
    /**
     * Removes <code>Currency</code> from the set of roles associated with this producer code.
     * @param currency the Currency to remove
     * @return true if <code>Currency</code> was previously associated with
     *         this producer code; false if this method was a no-op.
     */
    public boolean removeCurrency(typekey.Currency currency) {
      return ((com.guidewire.pc.domain.product.ProducerCodePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.product.ProducerCodePublicMethods")).removeCurrency(currency);
    }
    
    /**
     * Removes the given element from the AffinityGroupProducerCodes array. This is achieved by marking the element for removal.
     */
    public void removeFromAffinityGroupProducerCodes(entity.AffinityGroupProducerCode element) {
      __getInternalInterface().removeArrayElement(AFFINITYGROUPPRODUCERCODES_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the AffinityGroupProducerCodes array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromAffinityGroupProducerCodes(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(AFFINITYGROUPPRODUCERCODES_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the CommissionPlans array. This is achieved by marking the element for removal.
     */
    public void removeFromCommissionPlans(entity.CommissionPlan element) {
      __getInternalInterface().removeArrayElement(COMMISSIONPLANS_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the CommissionPlans array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromCommissionPlans(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(COMMISSIONPLANS_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the Description_L10N_ARRAY array. This is achieved by marking the element for removal.
     */
    public void removeFromDescription_L10N_ARRAY(entity.ProducerCode_Description_L10N element) {
      __getInternalInterface().removeArrayElement(DESCRIPTION_L10N_ARRAY_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the Description_L10N_ARRAY array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromDescription_L10N_ARRAY(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(DESCRIPTION_L10N_ARRAY_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the GroupProducerCodes array. This is achieved by marking the element for removal.
     */
    public void removeFromGroupProducerCodes(entity.GroupProducerCode element) {
      __getInternalInterface().removeArrayElement(GROUPPRODUCERCODES_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the GroupProducerCodes array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromGroupProducerCodes(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(GROUPPRODUCERCODES_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the ProducerCodeRoles array. This is achieved by marking the element for removal.
     */
    public void removeFromProducerCodeRoles(entity.ProducerCodeRole element) {
      __getInternalInterface().removeArrayElement(PRODUCERCODEROLES_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the ProducerCodeRoles array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromProducerCodeRoles(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(PRODUCERCODEROLES_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the ProducercodecodeArray array. This is achieved by marking the element for removal.
     */
    public void removeFromProducercodecodeArray(entity.Producercodecode element) {
      __getInternalInterface().removeArrayElement(PRODUCERCODECODEARRAY_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the ProducercodecodeArray array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromProducercodecodeArray(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(PRODUCERCODECODEARRAY_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the UserProducerCodes array. This is achieved by marking the element for removal.
     */
    public void removeFromUserProducerCodes(entity.UserProducerCode element) {
      __getInternalInterface().removeArrayElement(USERPRODUCERCODES_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the UserProducerCodes array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromUserProducerCodes(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(USERPRODUCERCODES_PROP.get(), elementID);
    }
    
    /**
     * Removes <code>group</code> and all its descendants from
     * the set of groups associated with this producer code.
     * @param group the group to remove
     * @return true if <code>group</code> was previously associated with
     *         this producer code; false if this method was a no-op.
     */
    public boolean removeGroup(entity.Group group) {
      return ((com.guidewire.pc.domain.product.ProducerCodePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.product.ProducerCodePublicMethods")).removeGroup(group);
    }
    
    /**
     * Removes <code>role</code> from the set of roles associated with this producer code.
     * @param role the role to remove
     * @return true if <code>role</code> was previously associated with
     *         this producer code; false if this method was a no-op.
     */
    public boolean removeRole(entity.Role role) {
      return ((com.guidewire.pc.domain.product.ProducerCodePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.product.ProducerCodePublicMethods")).removeRole(role);
    }
    
    /**
     * Removes <code>User</code> from the set of users associated with this producer code.
     * 
     * If no containing Organization exists, will short circuit.
     * @param user the user to remove
     * @return true if <code>user</code> was previously associated with
     *         this producer code; false if this method was a no-op.
     */
    public boolean removeUser(entity.User user) {
      return ((com.guidewire.pc.domain.product.ProducerCodePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.product.ProducerCodePublicMethods")).removeUser(user);
    }
    
    public void removed() {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).removed();
    }
    
    /**
     * Sets the value of the Address field.
     */
    public void setAddress(entity.Address value) {
      __getInternalInterface().setFieldValue(ADDRESS_PROP.get(), value);
    }
    
    public void setAddressID(gw.pl.persistence.core.Key value) {
      setFieldValue(ADDRESS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the AddressPublicID field.
     */
    public void setAddressPublicID(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(ADDRESSPUBLICID_PROP.get(), value);
    }
    
    /**
     * Sets the value of the AffinityGroupProducerCodes field.
     */
    public void setAffinityGroupProducerCodes(entity.AffinityGroupProducerCode[] value) {
      __getInternalInterface().setFieldValue(AFFINITYGROUPPRODUCERCODES_PROP.get(), value);
    }
    
    /**
     * Sets the value of the AppointmentDate field.
     */
    public void setAppointmentDate(java.util.Date value) {
      __getInternalInterface().setFieldValue(APPOINTMENTDATE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the BeanVersion field.
     */
    public void setBeanVersion(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(BEANVERSION_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Branch field.
     */
    public void setBranch(entity.Group value) {
      __getInternalInterface().setFieldValue(BRANCH_PROP.get(), value);
    }
    
    public void setBranchID(gw.pl.persistence.core.Key value) {
      setFieldValue(BRANCH_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Code field.
     */
    public void setCode(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(CODE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the CodeDenorm field.
     */
    public void setCodeDenorm(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(CODEDENORM_PROP.get(), value);
    }
    
    /**
     * Sets the value of the CommissionPlans field.
     */
    public void setCommissionPlans(entity.CommissionPlan[] value) {
      __getInternalInterface().setFieldValue(COMMISSIONPLANS_PROP.get(), value);
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
     * Sets the value of the Description field.
     */
    public void setDescription(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(DESCRIPTION_PROP.get(), value);
    }
    
    /**
     * Sets the value of the DescriptionDenorm field.
     */
    public void setDescriptionDenorm(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(DESCRIPTIONDENORM_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Description_L10N_ARRAY field.
     */
    public void setDescription_L10N_ARRAY(entity.ProducerCode_Description_L10N[] value) {
      __getInternalInterface().setFieldValue(DESCRIPTION_L10N_ARRAY_PROP.get(), value);
    }
    
    /**
     * Sets the value of the GroupProducerCodes field.
     */
    public void setGroupProducerCodes(entity.GroupProducerCode[] value) {
      __getInternalInterface().setFieldValue(GROUPPRODUCERCODES_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ID field.
     */
    public void setID(gw.pl.persistence.core.Key value) {
      __getInternalInterface().setFieldValue(ID_PROP.get(), value);
    }
    
    public void setLazyLoadedRow() {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).setLazyLoadedRow();
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
     * Sets the value of the Organization field.
     */
    public void setOrganization(entity.Organization value) {
      __getInternalInterface().setFieldValue(ORGANIZATION_PROP.get(), value);
    }
    
    public void setOrganizationID(gw.pl.persistence.core.Key value) {
      setFieldValue(ORGANIZATION_PROP.get(), value);
    }
    
    /**
     * This will update the organization by removing the current groups and adding
     * the root group of the new organization.
     * @param org the new organization value
     */
    public void setOrganizationWithUpdate(entity.Organization org) {
      ((com.guidewire.pc.domain.product.ProducerCodePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.product.ProducerCodePublicMethods")).setOrganizationWithUpdate(org);
    }
    
    /**
     * Sets the value of the Parent field.
     */
    public void setParent(entity.ProducerCode value) {
      __getInternalInterface().setFieldValue(PARENT_PROP.get(), value);
    }
    
    public void setParentID(gw.pl.persistence.core.Key value) {
      setFieldValue(PARENT_PROP.get(), value);
    }
    
    /**
     * This will update the branch and underwriter from the parent producer code
     * @param parent the ProducerCode to consider the parent
     */
    public void setParentWithUpdate(entity.ProducerCode parent) {
      ((com.guidewire.pc.domain.product.ProducerCodePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.product.ProducerCodePublicMethods")).setParentWithUpdate(parent);
    }
    
    /**
     * Sets the value of the PreferredUnderwriter field.
     */
    public void setPreferredUnderwriter(entity.User value) {
      __getInternalInterface().setFieldValue(PREFERREDUNDERWRITER_PROP.get(), value);
    }
    
    public void setPreferredUnderwriterID(gw.pl.persistence.core.Key value) {
      setFieldValue(PREFERREDUNDERWRITER_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ProducerCodeRoles field.
     */
    public void setProducerCodeRoles(entity.ProducerCodeRole[] value) {
      __getInternalInterface().setFieldValue(PRODUCERCODEROLES_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ProducerStatus field.
     */
    public void setProducerStatus(typekey.ProducerStatus value) {
      __getInternalInterface().setFieldValue(PRODUCERSTATUS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ProducercodecodeArray field.
     */
    public void setProducercodecodeArray(entity.Producercodecode[] value) {
      __getInternalInterface().setFieldValue(PRODUCERCODECODEARRAY_PROP.get(), value);
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    public void setPublicID(java.lang.String id) {
      ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).setPublicID(id);
    }
    
    public void setRetired() {
      ((com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods")).setRetired();
    }
    
    /**
     * Sets the value of the RetiredValue field.
     */
    public void setRetiredValue(java.lang.Long value) {
      __getInternalInterface().setFieldValue(RETIREDVALUE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the TerminationDate field.
     */
    public void setTerminationDate(java.util.Date value) {
      __getInternalInterface().setFieldValue(TERMINATIONDATE_PROP.get(), value);
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
     * This will set the users availability to the given value,
     * if true will add the user, if false will remove the user
     * @param user the user to work with
     * @param value the value of to set availability to
     */
    public void setUserAvailability(entity.User user, java.lang.Boolean value) {
      ((com.guidewire.pc.domain.product.ProducerCodePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.product.ProducerCodePublicMethods")).setUserAvailability(user, value);
    }
    
    /**
     * Sets the value of the UserProducerCodes field.
     */
    public void setUserProducerCodes(entity.UserProducerCode[] value) {
      __getInternalInterface().setFieldValue(USERPRODUCERCODES_PROP.get(), value);
    }
    
    public void setValidationResult(gw.api.validation.ValidationResult result) {
      ((com.guidewire.pl.domain.validation.impl.ValidatableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.validation.impl.ValidatableInternalMethods")).setValidationResult(result);
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
    
    /**
     * Set commission plan with the appropriate currency.
     * @param currency 
     * @param planID 
     */
    public void updateCommissionPlanID(typekey.Currency currency, java.lang.String planID) {
      ((com.guidewire.pc.domain.product.ProducerCodePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.product.ProducerCodePublicMethods")).updateCommissionPlanID(currency, planID);
    }
    
    public gw.api.validation.ValidationResult validate() {
      return ((com.guidewire.pl.domain.validation.impl.ValidatableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.validation.impl.ValidatableInternalMethods")).validate();
    }
    
    
  }
  
  static {
    java.util.HashMap<java.lang.String, java.lang.String> config = new java.util.HashMap<java.lang.String, java.lang.String>();
    config.put("com.guidewire.commons.entity.Keyable", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.commons.entity.Sourceable", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pc.domain.product.ProducerCodePublicMethods", "com.guidewire.pc.domain.product.impl.ProducerCodeImpl");
    config.put("com.guidewire.pc.domain.product.impl.ProducerCodeInternalMethods", "com.guidewire.pc.domain.product.impl.ProducerCodeImpl");
    config.put("com.guidewire.pl.domain.messaging.EventAwarePublicMethods", "com.guidewire.pl.domain.messaging.impl.EventAwareImpl");
    config.put("com.guidewire.pl.domain.messaging.impl.EventAwareInternalMethods", "com.guidewire.pl.domain.messaging.impl.EventAwareImpl");
    config.put("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.RetireablePublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractEditableRetireableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.BeanInternal", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods", "com.guidewire.pl.system.entity.proxy.AbstractKeyableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods", "com.guidewire.pl.system.entity.proxy.AbstractEditableRetireableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.VersionableInternal", "com.guidewire.pl.system.entity.proxy.AbstractEditableBeanProxy");
    config.put("com.guidewire.pl.domain.validation.ValidatablePublicMethods", "com.guidewire.pl.domain.validation.impl.ValidatableImpl");
    config.put("com.guidewire.pl.domain.validation.impl.ValidatableInternalMethods", "com.guidewire.pl.domain.validation.impl.ValidatableImpl");
    config.put("com.guidewire.pl.persistence.core.BeanMethods", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("gw.pl.persistence.core.Bean", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("gw.pl.persistence.core.BundleProvider", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("java.lang.Comparable", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    DELEGATE_MAP  =  com.guidewire.pl.persistence.code.DelegateMap.newInstance(entity.ProducerCode.class, config);
    com.guidewire._generated.entity.ProducerCodeInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.InstantiableEntityFriendAccess<entity.ProducerCode, com.guidewire._generated.entity.ProducerCodeInternal>() {
      public java.lang.Object getImplementation(entity.ProducerCode bean, java.lang.String interfaceName) {
        return bean.__getDelegateManager().getImplementation(interfaceName);
      }
      
      public com.guidewire._generated.entity.ProducerCodeInternal getInternalInterface(entity.ProducerCode bean) {
        if(bean == null) {
          return null;
        };
        return bean.__getInternalInterface();
      }
      
      public entity.ProducerCode newEmptyInstance() {
        return new entity.ProducerCode((java.lang.Void)null);
      }
      
      public void validateImplementations() {
        DELEGATE_MAP.validateImplementations();
      }
      
      
    });
  }
}
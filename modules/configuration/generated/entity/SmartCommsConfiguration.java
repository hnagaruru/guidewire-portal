package entity;

/**
 * SmartCommsConfiguration
 * Configurations for Smart Communications integration
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "SmartCommsConfiguration.eti;SmartCommsConfiguration.eix;SmartCommsConfiguration.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
@gw.entity.EntityName(value = "SmartCommsConfiguration")
public class SmartCommsConfiguration extends entity.IntegrationConfiguration {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.SmartCommsConfiguration> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.SmartCommsConfiguration>("entity.SmartCommsConfiguration");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> APPLIANCEHOSTNAME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ApplianceHostname");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> APPLIANCEINPUTFOLDER_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ApplianceInputFolder");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> APPLIANCELOGSFOLDER_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ApplianceLogsFolder");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> APPLIANCEOUTPUTFOLDER_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ApplianceOutputFolder");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> APPLIANCEQUEUE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ApplianceQueue");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> APPLIANCESTORAGELOCATION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ApplianceStorageLocation");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> BULKJOBNAME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "BulkJobName");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> BULKSERVICEURL_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "BulkServiceURL");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> BULKTRANSACTIONTYPE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "BulkTransactionType");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CONSUMERKEY_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ConsumerKey");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CONSUMERSECRET_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ConsumerSecret");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CORRESPONDENCESERVICEURL_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CorrespondenceServiceURL");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> DOCUMENTRETRIEVALURL_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "DocumentRetrievalURL");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> EMAILTEMPLATEID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "EmailTemplateID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> HOSTNAME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Hostname");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> JOBSERVICEURL_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "JobServiceURL");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> TEMPLATESELECTORID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "TemplateSelectorID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> USERNAME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Username");
  
  private static final com.guidewire.pl.persistence.code.DelegateMap DELEGATE_MAP;
  
  /**
   * Constructs a new instance of this entity in the {@link gw.transaction.Transaction#getCurrent() current} bundle.
   * @throws java.lang.NullPointerException if there is no current bundle defined
   */
  public SmartCommsConfiguration()  {
    this(gw.transaction.Transaction.getCurrent());
  }
  
  /**
   * Constructs a new instance of this entity in the bundle supplied by the given bundle provider.
   */
  public SmartCommsConfiguration(gw.pl.persistence.core.BundleProvider bundleProvider)  {
    this((java.lang.Void)null);
    com.guidewire.pl.system.entity.proxy.BeanProxy.initNewBeanInstance(this, bundleProvider.getBundle(), java.util.Arrays.asList());
  }
  
  protected SmartCommsConfiguration(java.lang.Void ignored)  {
    super(ignored);
  }
  
  protected com.guidewire._generated.entity.SmartCommsConfigurationInternal __createInternalInterface() {
    return new _Internal();
  }
  
  protected com.guidewire.pl.persistence.code.DelegateMap __getDelegateMap() {
    return DELEGATE_MAP;
  }
  
  protected com.guidewire._generated.entity.SmartCommsConfigurationInternal __getInternalInterface() {
    return (com.guidewire._generated.entity.SmartCommsConfigurationInternal)super.__getInternalInterface();
  }
  
  /**
   * Gets the value of the ApplianceHostname field.
   * Smart Communications appliance hostname
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getApplianceHostname() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(APPLIANCEHOSTNAME_PROP.get());
  }
  
  /**
   * Gets the value of the ApplianceInputFolder field.
   * Smart Communications appliance input folder
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getApplianceInputFolder() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(APPLIANCEINPUTFOLDER_PROP.get());
  }
  
  /**
   * Gets the value of the ApplianceLogsFolder field.
   * Smart Communications appliance logs folder
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getApplianceLogsFolder() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(APPLIANCELOGSFOLDER_PROP.get());
  }
  
  /**
   * Gets the value of the ApplianceOutputFolder field.
   * Smart Communications appliance output folder
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getApplianceOutputFolder() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(APPLIANCEOUTPUTFOLDER_PROP.get());
  }
  
  /**
   * Gets the value of the ApplianceQueue field.
   * Smart Communications appliance queue
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getApplianceQueue() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(APPLIANCEQUEUE_PROP.get());
  }
  
  /**
   * Gets the value of the ApplianceStorageLocation field.
   * Smart Communications appliance storage location
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getApplianceStorageLocation() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(APPLIANCESTORAGELOCATION_PROP.get());
  }
  
  /**
   * Gets the value of the BulkJobName field.
   * Bulk Job Name
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getBulkJobName() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(BULKJOBNAME_PROP.get());
  }
  
  /**
   * Gets the value of the BulkServiceURL field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getBulkServiceURL() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(BULKSERVICEURL_PROP.get());
  }
  
  /**
   * Gets the value of the BulkTransactionType field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getBulkTransactionType() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(BULKTRANSACTIONTYPE_PROP.get());
  }
  
  /**
   * Gets the value of the ConsumerKey field.
   * Consumer key
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getConsumerKey() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(CONSUMERKEY_PROP.get());
  }
  
  /**
   * Gets the value of the ConsumerSecret field.
   * Consumer Secret
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getConsumerSecret() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(CONSUMERSECRET_PROP.get());
  }
  
  /**
   * Gets the value of the CorrespondenceServiceURL field.
   * Smart Communications correspondence service URL
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCorrespondenceServiceURL() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(CORRESPONDENCESERVICEURL_PROP.get());
  }
  
  /**
   * Gets the value of the DocumentRetrievalURL field.
   * Smart Communications cached document retrieval URL
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getDocumentRetrievalURL() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(DOCUMENTRETRIEVALURL_PROP.get());
  }
  
  /**
   * Gets the value of the EmailTemplateID field.
   * TemplateID for email
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getEmailTemplateID() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(EMAILTEMPLATEID_PROP.get());
  }
  
  /**
   * Gets the value of the Hostname field.
   * Smart Communications hostname
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getHostname() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(HOSTNAME_PROP.get());
  }
  
  /**
   * Gets the value of the JobServiceURL field.
   * Smart Communications Job service URL
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getJobServiceURL() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(JOBSERVICEURL_PROP.get());
  }
  
  /**
   * Gets the value of the TemplateSelectorID field.
   * Smart Communications Template Selector ID (also known as a batchConfigResId)
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getTemplateSelectorID() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(TEMPLATESELECTORID_PROP.get());
  }
  
  /**
   * Gets the value of the Username field.
   * Username for Smart Communications
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getUsername() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(USERNAME_PROP.get());
  }
  
  /**
   * Sets the value of the ApplianceHostname field.
   */
  public void setApplianceHostname(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(APPLIANCEHOSTNAME_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ApplianceInputFolder field.
   */
  public void setApplianceInputFolder(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(APPLIANCEINPUTFOLDER_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ApplianceLogsFolder field.
   */
  public void setApplianceLogsFolder(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(APPLIANCELOGSFOLDER_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ApplianceOutputFolder field.
   */
  public void setApplianceOutputFolder(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(APPLIANCEOUTPUTFOLDER_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ApplianceQueue field.
   */
  public void setApplianceQueue(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(APPLIANCEQUEUE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ApplianceStorageLocation field.
   */
  public void setApplianceStorageLocation(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(APPLIANCESTORAGELOCATION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the BulkJobName field.
   */
  public void setBulkJobName(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(BULKJOBNAME_PROP.get(), value);
  }
  
  /**
   * Sets the value of the BulkServiceURL field.
   */
  public void setBulkServiceURL(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(BULKSERVICEURL_PROP.get(), value);
  }
  
  /**
   * Sets the value of the BulkTransactionType field.
   */
  public void setBulkTransactionType(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(BULKTRANSACTIONTYPE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ConsumerKey field.
   */
  public void setConsumerKey(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(CONSUMERKEY_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ConsumerSecret field.
   */
  public void setConsumerSecret(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(CONSUMERSECRET_PROP.get(), value);
  }
  
  /**
   * Sets the value of the CorrespondenceServiceURL field.
   */
  public void setCorrespondenceServiceURL(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(CORRESPONDENCESERVICEURL_PROP.get(), value);
  }
  
  /**
   * Sets the value of the DocumentRetrievalURL field.
   */
  public void setDocumentRetrievalURL(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(DOCUMENTRETRIEVALURL_PROP.get(), value);
  }
  
  /**
   * Sets the value of the EmailTemplateID field.
   */
  public void setEmailTemplateID(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(EMAILTEMPLATEID_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Hostname field.
   */
  public void setHostname(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(HOSTNAME_PROP.get(), value);
  }
  
  /**
   * Sets the value of the JobServiceURL field.
   */
  public void setJobServiceURL(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(JOBSERVICEURL_PROP.get(), value);
  }
  
  /**
   * Sets the value of the TemplateSelectorID field.
   */
  public void setTemplateSelectorID(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(TEMPLATESELECTORID_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Username field.
   */
  public void setUsername(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(USERNAME_PROP.get(), value);
  }
  
  private class _Internal extends com.guidewire.pl.persistence.code.BeanInternalBase implements com.guidewire._generated.entity.SmartCommsConfigurationInternal {
    protected com.guidewire.pl.persistence.code.DelegateLoader __getDelegateManager() {
      return entity.SmartCommsConfiguration.this.__getDelegateManager();
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
     * Gets the value of the ApplianceHostname field.
     * Smart Communications appliance hostname
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getApplianceHostname() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(APPLIANCEHOSTNAME_PROP.get());
    }
    
    /**
     * Gets the value of the ApplianceInputFolder field.
     * Smart Communications appliance input folder
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getApplianceInputFolder() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(APPLIANCEINPUTFOLDER_PROP.get());
    }
    
    /**
     * Gets the value of the ApplianceLogsFolder field.
     * Smart Communications appliance logs folder
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getApplianceLogsFolder() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(APPLIANCELOGSFOLDER_PROP.get());
    }
    
    /**
     * Gets the value of the ApplianceOutputFolder field.
     * Smart Communications appliance output folder
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getApplianceOutputFolder() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(APPLIANCEOUTPUTFOLDER_PROP.get());
    }
    
    /**
     * Gets the value of the ApplianceQueue field.
     * Smart Communications appliance queue
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getApplianceQueue() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(APPLIANCEQUEUE_PROP.get());
    }
    
    /**
     * Gets the value of the ApplianceStorageLocation field.
     * Smart Communications appliance storage location
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getApplianceStorageLocation() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(APPLIANCESTORAGELOCATION_PROP.get());
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getBeanVersion() {
      return ((com.guidewire.pl.domain.persistence.core.VersionablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods")).getBeanVersion();
    }
    
    /**
     * Gets the value of the BulkJobName field.
     * Bulk Job Name
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getBulkJobName() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(BULKJOBNAME_PROP.get());
    }
    
    /**
     * Gets the value of the BulkServiceURL field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getBulkServiceURL() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(BULKSERVICEURL_PROP.get());
    }
    
    /**
     * Gets the value of the BulkTransactionType field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getBulkTransactionType() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(BULKTRANSACTIONTYPE_PROP.get());
    }
    
    /**
     * Gets the value of the ConsumerKey field.
     * Consumer key
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getConsumerKey() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(CONSUMERKEY_PROP.get());
    }
    
    /**
     * Gets the value of the ConsumerSecret field.
     * Consumer Secret
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getConsumerSecret() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(CONSUMERSECRET_PROP.get());
    }
    
    /**
     * Gets the value of the CorrespondenceServiceURL field.
     * Smart Communications correspondence service URL
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getCorrespondenceServiceURL() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(CORRESPONDENCESERVICEURL_PROP.get());
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
     * Gets the value of the DocumentRetrievalURL field.
     * Smart Communications cached document retrieval URL
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getDocumentRetrievalURL() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(DOCUMENTRETRIEVALURL_PROP.get());
    }
    
    /**
     * Gets the value of the EmailTemplateID field.
     * TemplateID for email
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getEmailTemplateID() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(EMAILTEMPLATEID_PROP.get());
    }
    
    /**
     * Gets the value of the Hostname field.
     * Smart Communications hostname
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getHostname() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(HOSTNAME_PROP.get());
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
     * Gets the value of the JobServiceURL field.
     * Smart Communications Job service URL
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getJobServiceURL() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(JOBSERVICEURL_PROP.get());
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
     * Gets the value of the Subtype field.
     * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.IntegrationConfiguration getSubtype() {
      return (typekey.IntegrationConfiguration)__getInternalInterface().getFieldValue(SUBTYPE_PROP.get());
    }
    
    /**
     * Gets the value of the TemplateSelectorID field.
     * Smart Communications Template Selector ID (also known as a batchConfigResId)
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getTemplateSelectorID() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(TEMPLATESELECTORID_PROP.get());
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
     * Gets the value of the Username field.
     * Username for Smart Communications
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getUsername() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(USERNAME_PROP.get());
    }
    
    public void initInBundle(gw.pl.persistence.core.Key id, gw.pl.persistence.core.Bundle bundle) {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).initInBundle(id, bundle);
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
     * Sets the value of the ApplianceHostname field.
     */
    public void setApplianceHostname(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(APPLIANCEHOSTNAME_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ApplianceInputFolder field.
     */
    public void setApplianceInputFolder(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(APPLIANCEINPUTFOLDER_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ApplianceLogsFolder field.
     */
    public void setApplianceLogsFolder(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(APPLIANCELOGSFOLDER_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ApplianceOutputFolder field.
     */
    public void setApplianceOutputFolder(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(APPLIANCEOUTPUTFOLDER_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ApplianceQueue field.
     */
    public void setApplianceQueue(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(APPLIANCEQUEUE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ApplianceStorageLocation field.
     */
    public void setApplianceStorageLocation(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(APPLIANCESTORAGELOCATION_PROP.get(), value);
    }
    
    /**
     * Sets the value of the BeanVersion field.
     */
    public void setBeanVersion(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(BEANVERSION_PROP.get(), value);
    }
    
    /**
     * Sets the value of the BulkJobName field.
     */
    public void setBulkJobName(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(BULKJOBNAME_PROP.get(), value);
    }
    
    /**
     * Sets the value of the BulkServiceURL field.
     */
    public void setBulkServiceURL(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(BULKSERVICEURL_PROP.get(), value);
    }
    
    /**
     * Sets the value of the BulkTransactionType field.
     */
    public void setBulkTransactionType(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(BULKTRANSACTIONTYPE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ConsumerKey field.
     */
    public void setConsumerKey(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(CONSUMERKEY_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ConsumerSecret field.
     */
    public void setConsumerSecret(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(CONSUMERSECRET_PROP.get(), value);
    }
    
    /**
     * Sets the value of the CorrespondenceServiceURL field.
     */
    public void setCorrespondenceServiceURL(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(CORRESPONDENCESERVICEURL_PROP.get(), value);
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
     * Sets the value of the DocumentRetrievalURL field.
     */
    public void setDocumentRetrievalURL(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(DOCUMENTRETRIEVALURL_PROP.get(), value);
    }
    
    /**
     * Sets the value of the EmailTemplateID field.
     */
    public void setEmailTemplateID(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(EMAILTEMPLATEID_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Hostname field.
     */
    public void setHostname(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(HOSTNAME_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ID field.
     */
    public void setID(gw.pl.persistence.core.Key value) {
      __getInternalInterface().setFieldValue(ID_PROP.get(), value);
    }
    
    /**
     * Sets the value of the JobServiceURL field.
     */
    public void setJobServiceURL(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(JOBSERVICEURL_PROP.get(), value);
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
     * Sets the value of the Subtype field.
     */
    public void setSubtype(typekey.IntegrationConfiguration value) {
      __getInternalInterface().setFieldValue(SUBTYPE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the TemplateSelectorID field.
     */
    public void setTemplateSelectorID(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(TEMPLATESELECTORID_PROP.get(), value);
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
     * Sets the value of the Username field.
     */
    public void setUsername(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(USERNAME_PROP.get(), value);
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
    config.put("com.guidewire.pl.domain.persistence.core.RetireablePublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractEditableRetireableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.BeanInternal", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods", "com.guidewire.pl.system.entity.proxy.AbstractKeyableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods", "com.guidewire.pl.system.entity.proxy.AbstractEditableRetireableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.VersionableInternal", "com.guidewire.pl.system.entity.proxy.AbstractEditableBeanProxy");
    config.put("com.guidewire.pl.persistence.core.BeanMethods", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("gw.pl.persistence.core.Bean", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("gw.pl.persistence.core.BundleProvider", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("java.lang.Comparable", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    DELEGATE_MAP  =  com.guidewire.pl.persistence.code.DelegateMap.newInstance(entity.SmartCommsConfiguration.class, config);
    com.guidewire._generated.entity.SmartCommsConfigurationInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.InstantiableEntityFriendAccess<entity.SmartCommsConfiguration, com.guidewire._generated.entity.SmartCommsConfigurationInternal>() {
      public java.lang.Object getImplementation(entity.SmartCommsConfiguration bean, java.lang.String interfaceName) {
        return bean.__getDelegateManager().getImplementation(interfaceName);
      }
      
      public com.guidewire._generated.entity.SmartCommsConfigurationInternal getInternalInterface(entity.SmartCommsConfiguration bean) {
        if(bean == null) {
          return null;
        };
        return bean.__getInternalInterface();
      }
      
      public entity.SmartCommsConfiguration newEmptyInstance() {
        return new entity.SmartCommsConfiguration((java.lang.Void)null);
      }
      
      public void validateImplementations() {
        DELEGATE_MAP.validateImplementations();
      }
      
      
    });
  }
}
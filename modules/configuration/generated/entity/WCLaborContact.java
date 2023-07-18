package entity;

/**
 * WCLaborContact
 * A WCPolicyContactRole for WC Labor containing WCLaborContactDetails.
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "WCLaborContact.eti;WCLaborContact.eix;WCLaborContact.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
public abstract class WCLaborContact extends entity.WCPolicyContactRole implements gw.api.domain.account.Mergeable {
  public static final gw.pl.persistence.type.EffDatedEntityTypeReference<entity.WCLaborContact, entity.PolicyPeriod> TYPE = new com.guidewire.commons.metadata.types.EffDatedEntityIntrinsicTypeReference<entity.WCLaborContact, entity.PolicyPeriod>("entity.WCLaborContact");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> DETAILS_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "Details");
  
  protected WCLaborContact(java.lang.Void ignored)  {
    super(ignored);
  }
  
  protected abstract com.guidewire._generated.entity.WCLaborContactInternal __createInternalInterface();
  
  
  protected com.guidewire._generated.entity.WCLaborContactInternal __getInternalInterface() {
    return (com.guidewire._generated.entity.WCLaborContactInternal)super.__getInternalInterface();
  }
  
  /**
   * Adds the given element to the Details array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToDetails(entity.WCLaborContactDetail element) {
    __getInternalInterface().addArrayElement(DETAILS_PROP.get(), element);
  }
  
  public entity.WCLaborContact clone() {
    return (entity.WCLaborContact)__getInternalInterface().cloneUntyped();
  }
  
  public entity.WCLaborContact getBasedOn() {
    return (entity.WCLaborContact)__getInternalInterface().getBasedOnUntyped();
  }
  
  public entity.PolicyPeriod getBranch() {
    return (entity.PolicyPeriod)getBranchUntyped();
  }
  
  /**
   * Gets the value of the Details field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.WCLaborContactDetail[] getDetails() {
    return (entity.WCLaborContactDetail[])__getInternalInterface().getFieldValue(DETAILS_PROP.get());
  }
  
  public entity.WCLaborContact getSlice(java.util.Date sliceDate) {
    return (entity.WCLaborContact)getSliceUntyped(sliceDate);
  }
  
  public entity.WCLaborContact getUnsliced() {
    return (entity.WCLaborContact)getUnslicedUntyped();
  }
  
  public entity.windowed.WCLaborContactVersionList getVersionList() {
    return (entity.windowed.WCLaborContactVersionList)getVersionListUntyped();
  }
  
  /**
   * Removes the given element from the Details array. This is achieved by marking the element for removal.
   */
  public void removeFromDetails(entity.WCLaborContactDetail element) {
    __getInternalInterface().removeArrayElement(DETAILS_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the Details array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromDetails(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(DETAILS_PROP.get(), elementID);
  }
  
  /**
   * Sets the value of the Details field.
   */
  public void setDetails(entity.WCLaborContactDetail[] value) {
    __getInternalInterface().setFieldValue(DETAILS_PROP.get(), value);
  }
  
  public entity.WCLaborContact split(java.util.Date splitDate) {
    return (entity.WCLaborContact)splitUntyped(splitDate);
  }
  
  static {
    com.guidewire._generated.entity.WCLaborContactInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.EntityFriendAccess<entity.WCLaborContact, com.guidewire._generated.entity.WCLaborContactInternal>() {
      public java.lang.Object getImplementation(entity.WCLaborContact bean, java.lang.String interfaceName) {
        return bean.__getDelegateManager().getImplementation(interfaceName);
      }
      
      public com.guidewire._generated.entity.WCLaborContactInternal getInternalInterface(entity.WCLaborContact bean) {
        if(bean == null) {
          return null;
        };
        return bean.__getInternalInterface();
      }
      
      
    });
  }
}
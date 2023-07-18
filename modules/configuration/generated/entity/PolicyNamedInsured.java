package entity;

/**
 * PolicyNamedInsured
 * 
 *     A person or company directly protected by the policy with full rights and responsibilities.
 *   
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PolicyNamedInsured.eti;PolicyNamedInsured.eix;PolicyNamedInsured.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
public abstract class PolicyNamedInsured extends entity.PolicyContactRole implements gw.api.domain.account.Mergeable {
  public static final gw.pl.persistence.type.EffDatedEntityTypeReference<entity.PolicyNamedInsured, entity.PolicyPeriod> TYPE = new com.guidewire.commons.metadata.types.EffDatedEntityIntrinsicTypeReference<entity.PolicyNamedInsured, entity.PolicyPeriod>("entity.PolicyNamedInsured");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> LOCATIONNAMEDINSUREDS_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "LocationNamedInsureds");
  
  protected PolicyNamedInsured(java.lang.Void ignored)  {
    super(ignored);
  }
  
  protected abstract com.guidewire._generated.entity.PolicyNamedInsuredInternal __createInternalInterface();
  
  
  protected com.guidewire._generated.entity.PolicyNamedInsuredInternal __getInternalInterface() {
    return (com.guidewire._generated.entity.PolicyNamedInsuredInternal)super.__getInternalInterface();
  }
  
  /**
   * Adds the given element to the LocationNamedInsureds array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToLocationNamedInsureds(entity.LocationNamedInsured element) {
    __getInternalInterface().addArrayElement(LOCATIONNAMEDINSUREDS_PROP.get(), element);
  }
  
  public entity.PolicyNamedInsured clone() {
    return (entity.PolicyNamedInsured)__getInternalInterface().cloneUntyped();
  }
  
  public entity.PolicyNamedInsured getBasedOn() {
    return (entity.PolicyNamedInsured)__getInternalInterface().getBasedOnUntyped();
  }
  
  public entity.PolicyPeriod getBranch() {
    return (entity.PolicyPeriod)getBranchUntyped();
  }
  
  /**
   * Gets the value of the LocationNamedInsureds field.
   * The named insured covered at this location.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.LocationNamedInsured[] getLocationNamedInsureds() {
    return (entity.LocationNamedInsured[])__getInternalInterface().getFieldValue(LOCATIONNAMEDINSUREDS_PROP.get());
  }
  
  public entity.PolicyNamedInsured getSlice(java.util.Date sliceDate) {
    return (entity.PolicyNamedInsured)getSliceUntyped(sliceDate);
  }
  
  public entity.PolicyNamedInsured getUnsliced() {
    return (entity.PolicyNamedInsured)getUnslicedUntyped();
  }
  
  public entity.windowed.PolicyNamedInsuredVersionList getVersionList() {
    return (entity.windowed.PolicyNamedInsuredVersionList)getVersionListUntyped();
  }
  
  /**
   * Removes the given element from the LocationNamedInsureds array. This is achieved by marking the element for removal.
   */
  public void removeFromLocationNamedInsureds(entity.LocationNamedInsured element) {
    __getInternalInterface().removeArrayElement(LOCATIONNAMEDINSUREDS_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the LocationNamedInsureds array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromLocationNamedInsureds(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(LOCATIONNAMEDINSUREDS_PROP.get(), elementID);
  }
  
  /**
   * Sets the value of the LocationNamedInsureds field.
   */
  public void setLocationNamedInsureds(entity.LocationNamedInsured[] value) {
    __getInternalInterface().setFieldValue(LOCATIONNAMEDINSUREDS_PROP.get(), value);
  }
  
  public entity.PolicyNamedInsured split(java.util.Date splitDate) {
    return (entity.PolicyNamedInsured)splitUntyped(splitDate);
  }
  
  /**
   * Adds any official ids needed to this PolicyNamedInsured.  Returns true if
   * any official IDs are added.
   */
  public void updateOfficialIDs() {
    ((com.guidewire.pc.domain.contact.PolicyNamedInsuredPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.contact.PolicyNamedInsuredPublicMethods")).updateOfficialIDs();
  }
  
  static {
    com.guidewire._generated.entity.PolicyNamedInsuredInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.EntityFriendAccess<entity.PolicyNamedInsured, com.guidewire._generated.entity.PolicyNamedInsuredInternal>() {
      public java.lang.Object getImplementation(entity.PolicyNamedInsured bean, java.lang.String interfaceName) {
        return bean.__getDelegateManager().getImplementation(interfaceName);
      }
      
      public com.guidewire._generated.entity.PolicyNamedInsuredInternal getInternalInterface(entity.PolicyNamedInsured bean) {
        if(bean == null) {
          return null;
        };
        return bean.__getInternalInterface();
      }
      
      
    });
  }
}
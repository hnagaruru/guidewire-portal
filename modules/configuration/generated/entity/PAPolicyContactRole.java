package entity;

/**
 * PAPolicyContactRole
 * A PolicyContactRole specific to a PersonalAuto policy line.
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PAPolicyContactRole.eti;PAPolicyContactRole.eix;PAPolicyContactRole.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
public abstract class PAPolicyContactRole extends entity.PolicyContactRole {
  public static final gw.pl.persistence.type.EffDatedEntityTypeReference<entity.PAPolicyContactRole, entity.PolicyPeriod> TYPE = new com.guidewire.commons.metadata.types.EffDatedEntityIntrinsicTypeReference<entity.PAPolicyContactRole, entity.PolicyPeriod>("entity.PAPolicyContactRole");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> PERSONALAUTOLINE_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "PersonalAutoLine");
  
  protected PAPolicyContactRole(java.lang.Void ignored)  {
    super(ignored);
  }
  
  protected abstract com.guidewire._generated.entity.PAPolicyContactRoleInternal __createInternalInterface();
  
  
  protected com.guidewire._generated.entity.PAPolicyContactRoleInternal __getInternalInterface() {
    return (com.guidewire._generated.entity.PAPolicyContactRoleInternal)super.__getInternalInterface();
  }
  
  public entity.PAPolicyContactRole clone() {
    return (entity.PAPolicyContactRole)__getInternalInterface().cloneUntyped();
  }
  
  public entity.PAPolicyContactRole getBasedOn() {
    return (entity.PAPolicyContactRole)__getInternalInterface().getBasedOnUntyped();
  }
  
  public entity.PolicyPeriod getBranch() {
    return (entity.PolicyPeriod)getBranchUntyped();
  }
  
  /**
   * Gets the value of the PersonalAutoLine field.
   * The Personal Auto policy line this contact role is associated with.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PersonalAutoLine getPersonalAutoLine() {
    return (entity.PersonalAutoLine)__getInternalInterface().getFieldValue(PERSONALAUTOLINE_PROP.get());
  }
  
  public entity.PAPolicyContactRole getSlice(java.util.Date sliceDate) {
    return (entity.PAPolicyContactRole)getSliceUntyped(sliceDate);
  }
  
  public entity.PAPolicyContactRole getUnsliced() {
    return (entity.PAPolicyContactRole)getUnslicedUntyped();
  }
  
  public entity.windowed.PAPolicyContactRoleVersionList getVersionList() {
    return (entity.windowed.PAPolicyContactRoleVersionList)getVersionListUntyped();
  }
  
  /**
   * Sets the value of the PersonalAutoLine field.
   */
  public void setPersonalAutoLine(entity.PersonalAutoLine value) {
    __getInternalInterface().setFieldValue(PERSONALAUTOLINE_PROP.get(), value);
  }
  
  public entity.PAPolicyContactRole split(java.util.Date splitDate) {
    return (entity.PAPolicyContactRole)splitUntyped(splitDate);
  }
  
  static {
    com.guidewire._generated.entity.PAPolicyContactRoleInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.EntityFriendAccess<entity.PAPolicyContactRole, com.guidewire._generated.entity.PAPolicyContactRoleInternal>() {
      public java.lang.Object getImplementation(entity.PAPolicyContactRole bean, java.lang.String interfaceName) {
        return bean.__getDelegateManager().getImplementation(interfaceName);
      }
      
      public com.guidewire._generated.entity.PAPolicyContactRoleInternal getInternalInterface(entity.PAPolicyContactRole bean) {
        if(bean == null) {
          return null;
        };
        return bean.__getInternalInterface();
      }
      
      
    });
  }
}
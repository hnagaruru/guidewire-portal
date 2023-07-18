package entity;

/**
 * PAGeneralPremium
 * A taxable unit of price for a period of time, not to be broken up any further, for Personal Auto
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PAGeneralPremium.eti;PAGeneralPremium.eix;PAGeneralPremium.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
public abstract class PAGeneralPremium extends entity.PATaxable {
  public static final gw.pl.persistence.type.EffDatedEntityTypeReference<entity.PAGeneralPremium, entity.PolicyPeriod> TYPE = new com.guidewire.commons.metadata.types.EffDatedEntityIntrinsicTypeReference<entity.PAGeneralPremium, entity.PolicyPeriod>("entity.PAGeneralPremium");
  
  protected PAGeneralPremium(java.lang.Void ignored)  {
    super(ignored);
  }
  
  protected abstract com.guidewire._generated.entity.PAGeneralPremiumInternal __createInternalInterface();
  
  
  protected com.guidewire._generated.entity.PAGeneralPremiumInternal __getInternalInterface() {
    return (com.guidewire._generated.entity.PAGeneralPremiumInternal)super.__getInternalInterface();
  }
  
  public entity.PAGeneralPremium clone() {
    return (entity.PAGeneralPremium)__getInternalInterface().cloneUntyped();
  }
  
  public entity.PAGeneralPremium getBasedOn() {
    return (entity.PAGeneralPremium)__getInternalInterface().getBasedOnUntyped();
  }
  
  public entity.PolicyPeriod getBranch() {
    return (entity.PolicyPeriod)getBranchUntyped();
  }
  
  public entity.PAGeneralPremium getSlice(java.util.Date sliceDate) {
    return (entity.PAGeneralPremium)getSliceUntyped(sliceDate);
  }
  
  public entity.PAGeneralPremium getUnsliced() {
    return (entity.PAGeneralPremium)getUnslicedUntyped();
  }
  
  public entity.windowed.PAGeneralPremiumVersionList getVersionList() {
    return (entity.windowed.PAGeneralPremiumVersionList)getVersionListUntyped();
  }
  
  public entity.PAGeneralPremium split(java.util.Date splitDate) {
    return (entity.PAGeneralPremium)splitUntyped(splitDate);
  }
  
  static {
    com.guidewire._generated.entity.PAGeneralPremiumInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.EntityFriendAccess<entity.PAGeneralPremium, com.guidewire._generated.entity.PAGeneralPremiumInternal>() {
      public java.lang.Object getImplementation(entity.PAGeneralPremium bean, java.lang.String interfaceName) {
        return bean.__getDelegateManager().getImplementation(interfaceName);
      }
      
      public com.guidewire._generated.entity.PAGeneralPremiumInternal getInternalInterface(entity.PAGeneralPremium bean) {
        if(bean == null) {
          return null;
        };
        return bean.__getInternalInterface();
      }
      
      
    });
  }
}
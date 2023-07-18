package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPCovC.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class HOPCovC extends entity.HOPDwellingCov {
  protected HOPCovC()  {
    super((java.lang.Void)null);
  }
  
  public HOPCovC(entity.PolicyPeriod branch)  {
    super(branch, "zbtjua8nrhpvncl90406b37g2l9");
  }
  
  public HOPCovC(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "zbtjua8nrhpvncl90406b37g2l9");
  }
  
  public productmodel.OptionHOPCovCCauseOfLossType getHOPCovCCauseOfLossTerm() {
    return (productmodel.OptionHOPCovCCauseOfLossType)getCovTerm("z6vgm3qsh6cll9aur7b7jl9vr19");
  }
  
  public productmodel.DirectHOPCovCDirectLimitType getHOPCovCDirectLimitTerm() {
    return (productmodel.DirectHOPCovCDirectLimitType)getCovTerm("z0jjmb897bn960lvevaiagk4j38");
  }
  
  public productmodel.OptionHOPCovCLimitType getHOPCovCLimitTerm() {
    return (productmodel.OptionHOPCovCLimitType)getCovTerm("zc1ia45ph8a7i5plpkbr35mp2c9");
  }
  
  public productmodel.OptionHOPCovCOtherResidenceType getHOPCovCOtherResidenceTerm() {
    return (productmodel.OptionHOPCovCOtherResidenceType)getCovTerm("zalgosqi0n5nbbdpe0l7nep5l5b");
  }
  
  public productmodel.OptionHOPCovCSelfStorageUnitsType getHOPCovCSelfStorageUnitsTerm() {
    return (productmodel.OptionHOPCovCSelfStorageUnitsType)getCovTerm("zq0juckbo7cpvcgjed6459aic49");
  }
  
  public productmodel.OptionHOPCovCValuationType getHOPCovCValuationTerm() {
    return (productmodel.OptionHOPCovCValuationType)getCovTerm("zmmic6abinst0brv5j5p4fg2uca");
  }
  
  public boolean getHasHOPCovCCauseOfLossTerm() {
    return hasCovTerm("z6vgm3qsh6cll9aur7b7jl9vr19");
  }
  
  public boolean getHasHOPCovCDirectLimitTerm() {
    return hasCovTerm("z0jjmb897bn960lvevaiagk4j38");
  }
  
  public boolean getHasHOPCovCLimitTerm() {
    return hasCovTerm("zc1ia45ph8a7i5plpkbr35mp2c9");
  }
  
  public boolean getHasHOPCovCOtherResidenceTerm() {
    return hasCovTerm("zalgosqi0n5nbbdpe0l7nep5l5b");
  }
  
  public boolean getHasHOPCovCSelfStorageUnitsTerm() {
    return hasCovTerm("zq0juckbo7cpvcgjed6459aic49");
  }
  
  public boolean getHasHOPCovCValuationTerm() {
    return hasCovTerm("zmmic6abinst0brv5j5p4fg2uca");
  }
  
  static {
    com.guidewire._generated.productmodel.HOPCovCInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.HOPCovC>() {
      public productmodel.HOPCovC newEmptyInstance() {
        return new productmodel.HOPCovC();
      }
      
      
    });
  }
}
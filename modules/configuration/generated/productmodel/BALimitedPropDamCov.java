package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/BALimitedPropDamCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BALimitedPropDamCov extends entity.BAStateCov {
  protected BALimitedPropDamCov()  {
    super((java.lang.Void)null);
  }
  
  public BALimitedPropDamCov(entity.PolicyPeriod branch)  {
    super(branch, "BALimitedPropDamCov");
  }
  
  public BALimitedPropDamCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BALimitedPropDamCov");
  }
  
  public productmodel.OptionBALimitedPropDamLmtType getBALimitedPropDamLmtTerm() {
    return (productmodel.OptionBALimitedPropDamLmtType)getCovTerm("BALimitedPropDamLmt");
  }
  
  public boolean getHasBALimitedPropDamLmtTerm() {
    return hasCovTerm("BALimitedPropDamLmt");
  }
  
  static {
    com.guidewire._generated.productmodel.BALimitedPropDamCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BALimitedPropDamCov>() {
      public productmodel.BALimitedPropDamCov newEmptyInstance() {
        return new productmodel.BALimitedPropDamCov();
      }
      
      
    });
  }
}
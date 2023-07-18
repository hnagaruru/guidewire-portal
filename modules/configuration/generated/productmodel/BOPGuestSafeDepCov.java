package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPGuestSafeDepCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BOPGuestSafeDepCov extends entity.BusinessOwnersCov {
  protected BOPGuestSafeDepCov()  {
    super((java.lang.Void)null);
  }
  
  public BOPGuestSafeDepCov(entity.PolicyPeriod branch)  {
    super(branch, "BOPGuestSafeDepCov");
  }
  
  public BOPGuestSafeDepCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BOPGuestSafeDepCov");
  }
  
  public productmodel.OptionBOPGuestSafeDepLimitType getBOPGuestSafeDepLimitTerm() {
    return (productmodel.OptionBOPGuestSafeDepLimitType)getCovTerm("BOPGuestSafeDepLimit");
  }
  
  public boolean getHasBOPGuestSafeDepLimitTerm() {
    return hasCovTerm("BOPGuestSafeDepLimit");
  }
  
  static {
    com.guidewire._generated.productmodel.BOPGuestSafeDepCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BOPGuestSafeDepCov>() {
      public productmodel.BOPGuestSafeDepCov newEmptyInstance() {
        return new productmodel.BOPGuestSafeDepCov();
      }
      
      
    });
  }
}
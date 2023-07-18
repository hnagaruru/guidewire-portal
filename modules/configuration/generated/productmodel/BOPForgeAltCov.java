package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPForgeAltCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BOPForgeAltCov extends entity.BusinessOwnersCov {
  protected BOPForgeAltCov()  {
    super((java.lang.Void)null);
  }
  
  public BOPForgeAltCov(entity.PolicyPeriod branch)  {
    super(branch, "BOPForgeAltCov");
  }
  
  public BOPForgeAltCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BOPForgeAltCov");
  }
  
  public productmodel.OptionBOPForgeAltLimitType getBOPForgeAltLimitTerm() {
    return (productmodel.OptionBOPForgeAltLimitType)getCovTerm("BOPForgeAltLimit");
  }
  
  public boolean getHasBOPForgeAltLimitTerm() {
    return hasCovTerm("BOPForgeAltLimit");
  }
  
  static {
    com.guidewire._generated.productmodel.BOPForgeAltCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BOPForgeAltCov>() {
      public productmodel.BOPForgeAltCov newEmptyInstance() {
        return new productmodel.BOPForgeAltCov();
      }
      
      
    });
  }
}
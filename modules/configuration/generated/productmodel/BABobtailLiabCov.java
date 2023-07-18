package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/BABobtailLiabCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BABobtailLiabCov extends entity.BusinessAutoCov {
  protected BABobtailLiabCov()  {
    super((java.lang.Void)null);
  }
  
  public BABobtailLiabCov(entity.PolicyPeriod branch)  {
    super(branch, "BABobtailLiabCov");
  }
  
  public BABobtailLiabCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BABobtailLiabCov");
  }
  
  static {
    com.guidewire._generated.productmodel.BABobtailLiabCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BABobtailLiabCov>() {
      public productmodel.BABobtailLiabCov newEmptyInstance() {
        return new productmodel.BABobtailLiabCov();
      }
      
      
    });
  }
}
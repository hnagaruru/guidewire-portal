package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPSelfStorCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BOPSelfStorCov extends entity.BusinessOwnersCov {
  protected BOPSelfStorCov()  {
    super((java.lang.Void)null);
  }
  
  public BOPSelfStorCov(entity.PolicyPeriod branch)  {
    super(branch, "BOPSelfStorCov");
  }
  
  public BOPSelfStorCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BOPSelfStorCov");
  }
  
  static {
    com.guidewire._generated.productmodel.BOPSelfStorCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BOPSelfStorCov>() {
      public productmodel.BOPSelfStorCov newEmptyInstance() {
        return new productmodel.BOPSelfStorCov();
      }
      
      
    });
  }
}
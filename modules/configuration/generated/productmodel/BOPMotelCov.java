package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPMotelCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BOPMotelCov extends entity.BusinessOwnersCov {
  protected BOPMotelCov()  {
    super((java.lang.Void)null);
  }
  
  public BOPMotelCov(entity.PolicyPeriod branch)  {
    super(branch, "BOPMotelCov");
  }
  
  public BOPMotelCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BOPMotelCov");
  }
  
  static {
    com.guidewire._generated.productmodel.BOPMotelCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BOPMotelCov>() {
      public productmodel.BOPMotelCov newEmptyInstance() {
        return new productmodel.BOPMotelCov();
      }
      
      
    });
  }
}
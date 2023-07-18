package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPCondoAssnCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BOPCondoAssnCov extends entity.BusinessOwnersCov {
  protected BOPCondoAssnCov()  {
    super((java.lang.Void)null);
  }
  
  public BOPCondoAssnCov(entity.PolicyPeriod branch)  {
    super(branch, "BOPCondoAssnCov");
  }
  
  public BOPCondoAssnCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BOPCondoAssnCov");
  }
  
  static {
    com.guidewire._generated.productmodel.BOPCondoAssnCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BOPCondoAssnCov>() {
      public productmodel.BOPCondoAssnCov newEmptyInstance() {
        return new productmodel.BOPCondoAssnCov();
      }
      
      
    });
  }
}
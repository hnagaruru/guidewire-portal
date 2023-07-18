package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPFDService.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BOPFDService extends entity.BusinessOwnersCov {
  protected BOPFDService()  {
    super((java.lang.Void)null);
  }
  
  public BOPFDService(entity.PolicyPeriod branch)  {
    super(branch, "BOPFDService");
  }
  
  public BOPFDService(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BOPFDService");
  }
  
  static {
    com.guidewire._generated.productmodel.BOPFDServiceInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BOPFDService>() {
      public productmodel.BOPFDService newEmptyInstance() {
        return new productmodel.BOPFDService();
      }
      
      
    });
  }
}
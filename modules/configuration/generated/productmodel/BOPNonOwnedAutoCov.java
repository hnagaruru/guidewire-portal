package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPNonOwnedAutoCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BOPNonOwnedAutoCov extends entity.BusinessOwnersCov {
  protected BOPNonOwnedAutoCov()  {
    super((java.lang.Void)null);
  }
  
  public BOPNonOwnedAutoCov(entity.PolicyPeriod branch)  {
    super(branch, "BOPNonOwnedAutoCov");
  }
  
  public BOPNonOwnedAutoCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BOPNonOwnedAutoCov");
  }
  
  static {
    com.guidewire._generated.productmodel.BOPNonOwnedAutoCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BOPNonOwnedAutoCov>() {
      public productmodel.BOPNonOwnedAutoCov newEmptyInstance() {
        return new productmodel.BOPNonOwnedAutoCov();
      }
      
      
    });
  }
}
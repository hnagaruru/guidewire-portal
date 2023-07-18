package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPLockReplacement.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class HOPLockReplacement extends entity.HOPDwellingCov {
  protected HOPLockReplacement()  {
    super((java.lang.Void)null);
  }
  
  public HOPLockReplacement(entity.PolicyPeriod branch)  {
    super(branch, "z78h4sr6nki8ha99hku55rd4uaa");
  }
  
  public HOPLockReplacement(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "z78h4sr6nki8ha99hku55rd4uaa");
  }
  
  static {
    com.guidewire._generated.productmodel.HOPLockReplacementInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.HOPLockReplacement>() {
      public productmodel.HOPLockReplacement newEmptyInstance() {
        return new productmodel.HOPLockReplacement();
      }
      
      
    });
  }
}
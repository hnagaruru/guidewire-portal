package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/BACollisionLimited_MAMI.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BACollisionLimited_MAMI extends entity.BusinessVehicleCov {
  protected BACollisionLimited_MAMI()  {
    super((java.lang.Void)null);
  }
  
  public BACollisionLimited_MAMI(entity.PolicyPeriod branch)  {
    super(branch, "BACollisionLimited_MAMI");
  }
  
  public BACollisionLimited_MAMI(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BACollisionLimited_MAMI");
  }
  
  static {
    com.guidewire._generated.productmodel.BACollisionLimited_MAMIInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BACollisionLimited_MAMI>() {
      public productmodel.BACollisionLimited_MAMI newEmptyInstance() {
        return new productmodel.BACollisionLimited_MAMI();
      }
      
      
    });
  }
}
package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/PersonalAutoLine/coveragepatterns/PACollision_MA_MI_Limited.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class PACollision_MA_MI_Limited extends entity.PersonalVehicleCov {
  protected PACollision_MA_MI_Limited()  {
    super((java.lang.Void)null);
  }
  
  public PACollision_MA_MI_Limited(entity.PolicyPeriod branch)  {
    super(branch, "PACollision_MA_MI_Limited");
  }
  
  public PACollision_MA_MI_Limited(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "PACollision_MA_MI_Limited");
  }
  
  static {
    com.guidewire._generated.productmodel.PACollision_MA_MI_LimitedInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.PACollision_MA_MI_Limited>() {
      public productmodel.PACollision_MA_MI_Limited newEmptyInstance() {
        return new productmodel.PACollision_MA_MI_Limited();
      }
      
      
    });
  }
}
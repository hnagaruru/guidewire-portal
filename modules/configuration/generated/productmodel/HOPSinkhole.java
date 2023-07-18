package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPSinkhole.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class HOPSinkhole extends entity.HOPDwellingCov {
  protected HOPSinkhole()  {
    super((java.lang.Void)null);
  }
  
  public HOPSinkhole(entity.PolicyPeriod branch)  {
    super(branch, "zdmj42u34b70e98oe73a1ab3u48");
  }
  
  public HOPSinkhole(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "zdmj42u34b70e98oe73a1ab3u48");
  }
  
  static {
    com.guidewire._generated.productmodel.HOPSinkholeInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.HOPSinkhole>() {
      public productmodel.HOPSinkhole newEmptyInstance() {
        return new productmodel.HOPSinkhole();
      }
      
      
    });
  }
}
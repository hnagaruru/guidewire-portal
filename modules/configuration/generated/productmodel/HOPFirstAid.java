package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPFirstAid.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class HOPFirstAid extends entity.HOPLineCov {
  protected HOPFirstAid()  {
    super((java.lang.Void)null);
  }
  
  public HOPFirstAid(entity.PolicyPeriod branch)  {
    super(branch, "zeliiv44ls0fd7s7cdln05s05qa");
  }
  
  public HOPFirstAid(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "zeliiv44ls0fd7s7cdln05s05qa");
  }
  
  static {
    com.guidewire._generated.productmodel.HOPFirstAidInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.HOPFirstAid>() {
      public productmodel.HOPFirstAid newEmptyInstance() {
        return new productmodel.HOPFirstAid();
      }
      
      
    });
  }
}
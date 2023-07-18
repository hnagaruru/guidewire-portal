package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPCollapse.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class HOPCollapse extends entity.HOPDwellingCov {
  protected HOPCollapse()  {
    super((java.lang.Void)null);
  }
  
  public HOPCollapse(entity.PolicyPeriod branch)  {
    super(branch, "zdtga636fmshibrnrfu1h5s7cvb");
  }
  
  public HOPCollapse(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "zdtga636fmshibrnrfu1h5s7cvb");
  }
  
  static {
    com.guidewire._generated.productmodel.HOPCollapseInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.HOPCollapse>() {
      public productmodel.HOPCollapse newEmptyInstance() {
        return new productmodel.HOPCollapse();
      }
      
      
    });
  }
}
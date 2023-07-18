package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPScheduledLandlordsFurnishingItem.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class HOPScheduledLandlordsFurnishingItem extends entity.HOPDwellSchCovItemCov {
  protected HOPScheduledLandlordsFurnishingItem()  {
    super((java.lang.Void)null);
  }
  
  public HOPScheduledLandlordsFurnishingItem(entity.PolicyPeriod branch)  {
    super(branch, "zo5h0mvsjli2d8gp47cpa3appfb");
  }
  
  public HOPScheduledLandlordsFurnishingItem(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "zo5h0mvsjli2d8gp47cpa3appfb");
  }
  
  public productmodel.DirectHOPScheduledLandlordsFurnishingItemTotalLimitType getHOPScheduledLandlordsFurnishingItemTotalLimitTerm() {
    return (productmodel.DirectHOPScheduledLandlordsFurnishingItemTotalLimitType)getCovTerm("ziej03pfje7079tt5ug6uag6468");
  }
  
  public boolean getHasHOPScheduledLandlordsFurnishingItemTotalLimitTerm() {
    return hasCovTerm("ziej03pfje7079tt5ug6uag6468");
  }
  
  static {
    com.guidewire._generated.productmodel.HOPScheduledLandlordsFurnishingItemInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.HOPScheduledLandlordsFurnishingItem>() {
      public productmodel.HOPScheduledLandlordsFurnishingItem newEmptyInstance() {
        return new productmodel.HOPScheduledLandlordsFurnishingItem();
      }
      
      
    });
  }
}